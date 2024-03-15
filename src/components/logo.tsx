"use client";
import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const font = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

interface LogoProps {
  className?: string;
  variant?: "gradient" | "default";
}

export const Logo = ({ className, variant = "default" }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        font.className,
        "font-bold text-3xl transition-colors duration-300 lg:bg-gradient rounded-xl lg:size-[52px] lg:text-2xl flex items-center justify-center",
        variant === "gradient" && "bg-gradient text-transparent bg-clip-text",
        variant === "default" && "text-white",
        className
      )}
    >
      Calm
    </Link>
  );
};
