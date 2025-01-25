import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { type ReactNode } from "react";
import { cookieToInitialState } from "wagmi";

import { getConfig } from "../wagmi";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AA Marketplace",
  description: "Account Abstraction Marketplace",
};

export default function RootLayout(props: Readonly<{ children: ReactNode }>) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get("cookie"),
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers initialState={initialState}>{props.children}</Providers>
      </body>
    </html>
  );
}
