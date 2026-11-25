import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center",
          "rounded-full",
          "bg-blue-100",
          "px-4",
          "py-2",
          "text-sm",
          "font-medium",
          "text-blue-700",
          className
        )
      )}
    >
      {children}
    </span>
  );
}