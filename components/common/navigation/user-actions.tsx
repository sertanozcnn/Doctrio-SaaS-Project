"use client";

import Link from "next/link";
import NavLink from "./nav-link";
import { Button } from "@/components/ui/button";

interface UserActionsProps {
  isLoggedIn: boolean;
  className?: string;
}

export default function UserActions({
  isLoggedIn,
  className,
}: UserActionsProps) {
  return (
    <div className={`hidden md:flex items-center space-x-3 ${className}`}>
      {isLoggedIn ? (
        <>
          <Link
            href="/upload"
            className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
          >
            Upload PDF
          </Link>

          <NavLink href="/dashboard" className="px-4">
            Profile
          </NavLink>

          <div className="text-xs font-medium bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full shadow-sm">
            Pro
          </div>

          <Button
            variant="outline"
            size="sm"
            className="text-sm border-border hover:bg-accent hover:text-accent-foreground"
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Link
          href="/sign-in"
          className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
        >
          Sign In
        </Link>
      )}
    </div>
  );
}
