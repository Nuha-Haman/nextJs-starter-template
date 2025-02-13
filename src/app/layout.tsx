import type { Metadata } from "next";
import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { theme } from "@/config/theme";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  DirectionProvider,
} from "@mantine/core";
import { Geist, Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Starter template ",
  description: "Starter Nextjs Project template with Mantine",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" {...mantineHtmlProps}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <DirectionProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
