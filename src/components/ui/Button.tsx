import React from "react";
import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 rounded-[32px] text-sm font-medium transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};