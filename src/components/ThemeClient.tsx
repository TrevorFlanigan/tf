"use client"
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ThemeClientProps = {
  children: ReactNode;
}

const ThemeClient = ({children}: ThemeClientProps) => {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}

export default ThemeClient