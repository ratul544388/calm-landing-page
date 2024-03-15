"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("max-w-screen-lg px-5 mx-auto", className)}>
      {children}
    </div>
  );
};
