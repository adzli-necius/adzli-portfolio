import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = `button button--${variant} ${className}`.trim();
  return (
    <a className={buttonClassName} {...props}>
      <span>{children}</span>
      <ArrowOutwardRoundedIcon aria-hidden="true" fontSize="small" />
    </a>
  );
}
