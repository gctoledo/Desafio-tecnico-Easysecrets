import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={twMerge(
        "rounded shadow-md bg-secondary-foreground/5 border border-secondary-foreground/8 text-secondary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
