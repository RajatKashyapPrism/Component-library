import {
  TextField as AriaTextField,
  Label,
  Input,
  FieldError,
  Text,
  type TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components'
import styles from './TextField.module.css'

interface TextFieldProps extends Omit<AriaTextFieldProps, 'children'> {
  label: string
  description?: string
  errorMessage?: string
}

export function TextField({ label, description, errorMessage, ...props }: TextFieldProps) {
  return (
    <AriaTextField className={styles.root} {...props}>
      <div className={styles.wrapper}>
        {/* Input before label so CSS sibling selector (~) can float the label */}
        <Input className={styles.input} placeholder=" " />
        <Label className={styles.label}>{label}</Label>
      </div>

      {description && (
        <Text slot="description" className={styles.description}>
          {description}
        </Text>
      )}

      <FieldError className={styles.error}>
        {({ validationErrors }) => errorMessage ?? validationErrors.join(' ')}
      </FieldError>
    </AriaTextField>
  )
}
