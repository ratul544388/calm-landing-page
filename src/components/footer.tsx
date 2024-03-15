"use client";

import { footerIcons, footerLinks } from "@/constants";
import { Container } from "./container";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-12 pb-6 w-full bg-blue-950">
      <Container className="flex flex-col gap-6 items-center w-full max-w-[800px] px-12">
        <div className="flex gap-12 w-full justify-between flex-wrap">
          {footerLinks.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-3">
              <h5 className="text-white font-medium capitalize">{title}</h5>
              {links.map(({ label, href }) => (
                <Link
                  href={href}
                  key={label}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {footerIcons.map(({ Icon, href }, index) => (
            <Link key={index} href={href}>
              <Icon
                key={index}
                className="h-6 w-6 text-slate-400 hover:text-slate-200 transition-colors"
              />
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          Copyright © 2024 Test Web Design. All rights reserved
        </p>
      </Container>
    </footer>
  );
};
