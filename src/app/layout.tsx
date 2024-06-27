import "@/styles/globals.css";
import { Red_Hat_Display as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Providers from "@/components/Providers";
import { ViewTransitions } from "next-view-transitions";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <title>tf</title>
        </head>
        <body
          className={cn(
            "mb-5 lowercase min-h-screen bg-background font-sans font-bold antialiased flex flex-col items-center mx-auto max-w-[2000px]",
            "max-w-7xl",
            fontSans.variable
          )}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
