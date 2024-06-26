"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import { ReactNode } from "react";
import ThemeClient from "./ThemeClient";
import { ViewTransitions } from "next-view-transitions";

type ProvidersProps = { children: ReactNode };

const theme = createTheme({
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
});

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeClient>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </ThemeClient>
  );
};

export default Providers;
