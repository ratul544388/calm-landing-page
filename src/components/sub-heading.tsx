"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SubHeadingProps {
  className?: string;
  children: ReactNode;
}

export const SubHeading = ({ className, children }: SubHeadingProps) => {
  return (
    <h2
      className={cn(
        "text-blue-950 text-2xl font-semibold lg:text-4xl text-center",
        className
      )}
    >
      {children}
    </h2>
  );
};
