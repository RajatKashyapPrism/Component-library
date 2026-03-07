// PhoneField — outlined composite input: country code selector + phone number.
// Label is always pinned at the top since the country select always has a value.
// Formatting and validation are applied per dial code via phoneFormats.ts.
// Wrapper focus state handled via CSS :focus-within; keyboard ring via :focus-visible.

import { useId, useRef, useState } from 'react'
import { COUNTRIES } from './countries'
import type { Country } from './countries'
import { getPhoneFormat } from './phoneFormats'
import styles from './PhoneField.module.css'

interface PhoneFieldProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string
  isDisabled?: boolean
  isRequired?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
}

export function PhoneField({
  label = 'Phone number',
  placeholder,
  description,
  errorMessage,
  isDisabled,
  isRequired,
  isReadOnly,
  isInvalid,
}: PhoneFieldProps) {
  const [country, setCountry] = useState<Country>(COUNTRIES[0])
  const [selectOpen, setSelectOpen] = useState(false)
  const [rawDigits, setRawDigits] = useState('')
  const [validationError, setValidationError] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()
  const descriptionId = useId()
  const errorId = useId()

  const fmt = getPhoneFormat(country.dialCode)
  const displayValue = fmt ? fmt.format(rawDigits) : rawDigits

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(COUNTRIES.find(c => c.code === e.target.value) ?? COUNTRIES[0])
    setRawDigits('')
    setValidationError(null)
    setSelectOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, fmt?.maxDigits ?? 15)
    setRawDigits(digits)
    if (validationError) setValidationError(null)
  }

  const handleInputBlur = () => {
    if (!rawDigits || !fmt) return
    if (!fmt.validate(rawDigits)) {
      setValidationError(fmt.validationMessage)
    } else {
      setValidationError(null)
    }
  }

  const hasError = isInvalid || !!validationError
  const activeError = errorMessage || validationError

  return (
    <div
      className={styles.root}
      data-invalid={hasError || undefined}
      aria-disabled={isDisabled || undefined}
    >
      <div className={styles.wrapper}>

        {/* Country code selector */}
        <div className={styles.countryWrapper} data-open={selectOpen || undefined}>
          <select
            className={styles.country}
            value={country.code}
            disabled={isDisabled || isReadOnly}
            aria-label="Country dialling code"
            onMouseDown={() => setSelectOpen(o => !o)}
            onBlur={() => setSelectOpen(false)}
            onChange={handleCountryChange}
          >
            {COUNTRIES.map(c => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.dialCode}
              </option>
            ))}
          </select>
          <svg
            className={styles.countryChevron}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        {/* Phone number input */}
        <input
          ref={inputRef}
          id={inputId}
          type="tel"
          className={styles.input}
          value={displayValue}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          aria-required={isRequired || undefined}
          aria-invalid={hasError || undefined}
          aria-describedby={
            hasError && activeError ? errorId : description ? descriptionId : undefined
          }
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />

        {/* Label — always pinned at top since select always shows content */}
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {isRequired && <span aria-hidden="true"> *</span>}
        </label>

      </div>

      {description && !hasError && (
        <span id={descriptionId} className={styles.description}>
          {description}
        </span>
      )}

      {hasError && activeError && (
        <span id={errorId} className={styles.error} role="alert">
          {activeError}
        </span>
      )}
    </div>
  )
}
