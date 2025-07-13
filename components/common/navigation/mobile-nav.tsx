"use client";

import NavLink from "./nav-link";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
}

export default function MobileNav({
  isOpen,
  onClose,
  isLoggedIn,
}: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 bg-background/95 backdrop-blur border-b border-border/40 shadow-lg transform transition-all duration-300 ease-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div
            className={`flex flex-col space-y-6 transform transition-all duration-500 delay-100 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {/* Navigation Links */}
            <div className="flex flex-col space-y-4">
              <NavLink
                href="/#pricing"
                className={`text-base py-2 transform transition-all duration-300 delay-150 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                onClick={onClose}
              >
                Pricing
              </NavLink>
              <NavLink
                href="/#features"
                className={`text-base py-2 transform transition-all duration-300 delay-200 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                onClick={onClose}
              >
                Features
              </NavLink>
              <NavLink
                href="/help"
                className={`text-base py-2 transform transition-all duration-300 delay-250 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                onClick={onClose}
              >
                Help
              </NavLink>

              {isLoggedIn && (
                <NavLink
                  href="/dashboard"
                  className={`text-base py-2 transform transition-all duration-300 delay-300 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  onClick={onClose}
                >
                  Profile
                </NavLink>
              )}
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-col space-y-3 pt-4 border-t border-border/40 transform transition-all duration-300 delay-350 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {isLoggedIn ? (
                <>
                  <Link
                    href="/upload"
                    className="text-center text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                    onClick={onClose}
                  >
                    Upload PDF
                  </Link>

                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full shadow-sm">
                      Pro Plan
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-sm border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
                      onClick={onClose}
                    >
                      Sign Out
                    </Button>
                  </div>
                </>
              ) : (
                <Link
                  href="/sign-in"
                  className="text-center text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                  onClick={onClose}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
