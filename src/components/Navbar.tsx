"use client";

import Link from "next/link";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import VroomLogo from "./VroomLogo";
import { CONTACT_EMAIL } from "@/lib/constants";

const navItems: { label: string; href: string; external?: boolean }[] = [
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: `mailto:${CONTACT_EMAIL}`, external: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6">
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              className="hidden text-base font-medium text-neutral-300 transition-colors hover:text-white md:block"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="hidden text-base font-medium text-neutral-300 transition-colors hover:text-white md:block"
            >
              {item.label}
            </Link>
          )
        )}

        <Link href="/" className="flex items-center text-white">
          <VroomLogo className="h-5 w-auto sm:h-7" />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-6 bg-black/95 px-4 pb-8 pt-4 backdrop-blur-sm md:hidden">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-neutral-200 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-neutral-200 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
          <SocialLinks showLabels className="mt-2" />
        </div>
      )}
    </nav>
  );
}
