export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  label?: string;
  badge?: string | number;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  type?: ButtonType;
  iconPosition?: "left" | "right";
}
