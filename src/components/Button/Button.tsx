import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import styles from './Button.module.css';

// Props will be expanded once Figma design context is applied.
// Placeholder types based on known CSS tokens (size, variant).
export interface ButtonProps extends AriaButtonProps {
  /** Visual size of the button */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Visual variant — to be defined from Figma */
  variant?: string;
}

export const Button = ({ size = 'md', variant, className, children, ...props }: ButtonProps) => {
  const classes = [
    styles.button,
    styles[`size-${size}`],
    variant ? styles[`variant-${variant}`] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <AriaButton className={classes} {...props}>
      {children}
    </AriaButton>
  );
};
