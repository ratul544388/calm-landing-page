"use client";
import { navLinks } from "@/constants";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const scroll = useScroll();
  const animate = open ? "open" : "closed";

  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={onToggle}
        className="min-w-14 overflow-hidden aspect-square z-[200] relative rounded-full hover:bg-neutral-100/20"
      >
        <motion.span
          variants={{ closed: { x: "-50%" }, open: { rotate: 45, top: 26 } }}
          initial="closed"
          animate={animate}
          className={cn(
            "absolute h-1 w-8 top-4 transition-colors duration-300 bg-white rounded-full left-1/2",
            scroll > 50 && "bg-neutral-800"
          )}
        />
        <motion.span
          variants={{
            closed: { top: "50%", y: "-50%", x: "-50%", opacity: 1 },
            open: { x: "-100%", opacity: 0 },
          }}
          initial="closed"
          animate={animate}
          className={cn(
            "h-1 w-8 bg-white transition-colors duration-300 left-1/2 absolute rounded-full",
            scroll > 50 && "bg-neutral-800"
          )}
        />
        <motion.span
          variants={{
            closed: { x: "-50%" },
            open: { rotate: -45, bottom: 26 },
          }}
          initial="closed"
          animate={animate}
          className={cn(
            "absolute h-1 w-8 bottom-4 transition-colors duration-300 bg-white rounded-full left-1/2",
            scroll > 50 && "bg-neutral-800"
          )}
        />
      </button>
      <motion.div
        variants={{ open: { x: 0 }, closed: { x: "100%" } }}
        initial="closed"
        transition={{ ease: [0.25, 1, 0.5, 1] }}
        animate={animate}
        className="fixed flex flex-col gap-8 pt-20 px-8 z-[100] right-0 inset-y-0 w-[75vw] max-w-[400px] bg-gradient"
      >
        {navLinks.map(({ href, label }) => (
          <Link
            onClick={onToggle}
            href={href}
            key={label}
            className="text-xl font-semibold text-white"
          >
            {label}
          </Link>
        ))}
      </motion.div>
      <motion.span
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        initial="closed"
        animate={animate}
        onClick={onToggle}
        className={cn(
          "fixed inset-0 bg-neutral-900/20 backdrop-blur-sm z-50",
          !open && "pointer-events-none"
        )}
      />
    </>
  );
};
