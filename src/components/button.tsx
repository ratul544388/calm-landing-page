"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  variant?: "gradient" | "secondary" | "outline";
  children: ReactNode;
  onClick?: () => void;
  size?: "icon" | "default";
}

export const Button = ({
  className,
  variant = "gradient",
  size = "default",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-lg font-semibold rounded-full w-full flex items-center justify-center",
        variant === "gradient" &&
          "bg-gradient hover:bg-gradient-hover text-white",
        variant === "secondary" && "bg-white",
        variant === "outline" &&
          "border border-gray-300 hover:bg-gray-300 transition-colors",
        size === "default" && "h-[55px] px-5",
        size === "icon" && "size-9 rounded-full",
        className
      )}
    >
      {children}
    </button>
  );
};
