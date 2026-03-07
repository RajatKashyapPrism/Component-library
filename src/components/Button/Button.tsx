import React from 'react';
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import styles from './Button.module.css';

export interface ButtonProps extends Omit<AriaButtonProps, 'children'> {
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary';
  /** Visual size of the button */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Show icon slot before the label (not yet functional) */
  leftIcon?: boolean;
  /** Show icon slot after the label (not yet functional) */
  rightIcon?: boolean;
  /** When true, renders the button on a coloured/image background */
  isOnBackground?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isOnBackground = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const classes = [
    styles.button,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    isOnBackground ? styles['on-background'] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <AriaButton className={classes} {...props}>
      {leftIcon && <span className={styles.icon} />}
      {children && <span className={styles.label}>{children}</span>}
      {rightIcon && <span className={styles.icon} />}
    </AriaButton>
  );
};
