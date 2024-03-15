"use client";
import { cn } from "@/lib/utils";
import { Whisper, Dancing_Script } from "next/font/google";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./button";
import { useScroll } from "@/hooks/use-scroll";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import { Sidebar } from "./sidebar";

const font = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export const Header = () => {
  const scroll = useScroll();

  const showBg = scroll > 50;

  return (
    <motion.header
      animate={{ opacity: [0, 1] }}
      className="fixed opacity-0 inset-x-0 z-50 top-0 flex items-center justify-between px-5 lg:pl-10 h-[60px] lg:h-[100px]"
    >
      <Logo variant={showBg ? "gradient" : "default"} />
      <div className="flex items-center gap-4 sm:gap-8">
        {navLinks
          .filter((item) => Boolean(item.onSidebar))
          .map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className={cn(
                "font-medium text-lg text-gray-500 hover:text-gray-900 whitespace-nowrap transition-colors hidden lg:block",
                !showBg && "text-white"
              )}
            >
              {label}
            </Link>
          ))}
        <Button
          className="text-sm sm:text-base"
          variant={showBg ? "gradient" : "secondary"}
        >
          Try Claim For Free
        </Button>
        <Sidebar />
      </div>
      <motion.span
        variants={{
          hidden: { opacity: 0, y: "-100%" },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        transition={{ ease: "easeInOut", duration: 0.3 }}
        animate={showBg ? "visible" : "hidden"}
        className="absolute inset-0 bg-white -z-10"
      />
    </motion.header>
  );
};
