import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-primary rounded cursor-pointer text-accent-foreground hover:bg-accent transition-all duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
