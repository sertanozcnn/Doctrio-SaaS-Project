"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenuButton({
  isOpen,
  onToggle,
}: MobileMenuButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="md:hidden text-muted-foreground hover:text-foreground hover:bg-accent ml-auto transition-all duration-200 hover:scale-110"
      onClick={onToggle}
      aria-label="Toggle mobile menu"
    >
      <div className="relative">
        <Menu
          className={`h-5 w-5 transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </Button>
  );
}
