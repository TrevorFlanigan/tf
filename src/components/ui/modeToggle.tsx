"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
declare global {
  interface Document {
    startViewTransition?: (x: () => void) => void;
  }
}
export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggle = () => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  };
  if (typeof document === "undefined") return;
  return (
    <Button
      variant="ghost"
      className="hover:bg-transparent"
      size="icon"
      onClick={
        document.startViewTransition
          ? () => document.startViewTransition!(toggle)
          : toggle
      }
    >
      <Sun className="text-foreground h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="text-foreground absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
