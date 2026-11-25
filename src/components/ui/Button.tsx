import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(
          "inline-flex items-center justify-center",
          "rounded-2xl",
          "px-6 py-3.5 sm:px-8 sm:py-4",
          "max-w-full",
          "font-semibold",
          "transition-all duration-300",
          "active:scale-95",

          variant === "primary" &&
            "bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:-translate-y-0.5",

          variant === "secondary" &&
            "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",

          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
}