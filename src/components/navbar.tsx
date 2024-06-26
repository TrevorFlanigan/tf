"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useHeadroom } from "@mantine/hooks";
import { ModeToggle } from "./ui/modeToggle";

export function Navbar() {
  const pinned = useHeadroom({ fixedAt: 64 });
  return (
    <NavigationMenu
      className={cn(
        `lowercase max-w-[2000px] fixed top-0 left-0 right-0 h-16 z-50 transition-transform translate-y-0`,
        { "-translate-y-16": !pinned }
      )}
    >
      <NavigationMenuList className="flex-1 bg-background shadow">
        <NavigationMenuItem className="flex-1">
          <NavigationMenuLink
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
              });
            }}
            className={[navigationMenuTriggerStyle(), "text-foreground"].join(
              " "
            )}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex-1 ">
          <NavigationMenuLink
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
              });
            }}
            className={[navigationMenuTriggerStyle(), "text-foreground"].join(
              " "
            )}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex-1 ">
          <NavigationMenuLink
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
              });
            }}
            className={[navigationMenuTriggerStyle(), "text-foreground"].join(
              " "
            )}
          >
            Projects
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex-1 ">
          <NavigationMenuLink
            onClick={() => window.open("/resume.pdf", "_blank")}
            className={[navigationMenuTriggerStyle(), "text-foreground"].join(
              " "
            )}
          >
            Resume
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-background focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
