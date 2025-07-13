"use client";

import Link from "next/link";
import { useState } from "react";
import MobileNav from "./navigation/mobile-nav";
import UserActions from "./navigation/user-actions";
import MobileMenuButton from "./navigation/mobile-menu-button";
import DesktopNav from "./navigation/desktop-nav";

export default function Header() {
  const isLoggedIn = true; // Replace with actual authentication logic
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 md:px-6 lg:px-8 mx-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Doctrio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Desktop User Actions */}
          <UserActions isLoggedIn={isLoggedIn} />

          {/* Mobile Menu Button - Sağa yaslanmış */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onToggle={toggleMobileMenu}
          />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}
