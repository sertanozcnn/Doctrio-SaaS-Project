"use client";

import NavLink from "./nav-link";

interface DesktopNavProps {
  className?: string;
}

export default function DesktopNav({ className }: DesktopNavProps) {
  return (
    <div
      className={`hidden md:flex items-center justify-center flex-1 mx-8 ${className}`}
    >
      <NavLink href="/#pricing" className="px-4">
        Pricing
      </NavLink>
      <NavLink href="/#features" className="px-4">
        Features
      </NavLink>
      <NavLink href="/help" className="px-4">
        Help
      </NavLink>
    </div>
  );
}
