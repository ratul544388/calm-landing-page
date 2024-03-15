"use client";

import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
}

export const Separator = ({ className }: SeparatorProps) => {
  return <span className={cn("w-full h-[1px] bg-zinc-300", className)} />;
};
