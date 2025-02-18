import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

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
import React, { Suspense } from "react";
import StoreProvider from "../config/StoreProvider";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GlobalError from "./global-error";
import Loading from "./loading";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.JSX.Element> {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <React.Fragment>
      <html lang={locale} dir="rtl" {...mantineHtmlProps}>
        <head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <ColorSchemeScript />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <ErrorBoundary errorComponent={GlobalError}>
            <NextIntlClientProvider messages={messages}>
              <DirectionProvider>
                <MantineProvider theme={theme}>
                  <Suspense fallback={<Loading />}>
                    <StoreProvider>{children}</StoreProvider>
                  </Suspense>
                </MantineProvider>
              </DirectionProvider>
            </NextIntlClientProvider>
          </ErrorBoundary>
        </body>
      </html>
    </React.Fragment>
  );
}
