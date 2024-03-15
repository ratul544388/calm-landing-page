"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  className?: string;
  children: ReactNode;
}

export const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h1 className={cn("text-blue-950 font-semibold text-3xl lg:text-5xl text-center", className)}>
      {children}
    </h1>
  );
};
