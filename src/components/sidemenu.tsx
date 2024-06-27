"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { MouseEventHandler } from "react";

interface NavProps {
  orientation?: "vertical" | "horizontal";
  links: {
    title: string;
    label?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    icon: LucideIcon | (() => JSX.Element);
    variant: "default" | "ghost";
  }[];
}

export function Sidemenu({ links, orientation = "vertical" }: NavProps) {
  return (
    <div
      className={cn(
        {
          "flex-row": orientation === "horizontal",
          "flex-col": orientation === "vertical",
        },
        "group flex gap-4 py-2 data-[collapsed=true]:py-2"
      )}
    >
      <nav
        className={cn(
          {
            grid: orientation === "vertical",
            flex: orientation === "horizontal",
          },
          "gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2"
        )}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            onClick={link.onClick}
            href="#"
            className={cn(
              buttonVariants({ variant: link.variant, size: "sm" }),
              link.variant === "default" &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start"
            )}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.title}
            {link.label && (
              <span
                className={cn(
                  "ml-auto",
                  link.variant === "default" &&
                    "text-background dark:text-white"
                )}
              >
                {link.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
