"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import VroomLogo from "./VroomLogo";
import { CONTACT_EMAIL } from "@/lib/constants";

const navItems: { label: string; href: string; external?: boolean }[] = [
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: `mailto:${CONTACT_EMAIL}`, external: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => setMounted(true));
    } else {
      setMounted(false);
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            item={item}
            className="hidden text-base font-medium text-neutral-300 transition-colors hover:text-white md:block"
          />
        ))}

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
        <div className="flex flex-col items-end gap-3 px-4 pb-4 md:hidden">
          {navItems.map((item, i) => (
            <NavLink
              key={item.label}
              item={item}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium text-white transition-all duration-300 ease-out ${
                mounted
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 75}ms` }}
            />
          ))}
        </div>
      )}
    </nav>
  );
}

function NavLink({
  item,
  className,
  onClick,
  style,
}: {
  item: (typeof navItems)[number];
  className: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const props = { className, onClick, style, children: item.label };
  return item.external ? (
    <a href={item.href} {...props} />
  ) : (
    <Link href={item.href} {...props} />
  );
}
