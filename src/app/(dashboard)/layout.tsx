"use client";
import "./global.css";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import { Providers } from "../providers";

export default function RootLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar isBordered maxWidth="full">
            <NavbarBrand>{title}</NavbarBrand>
          </Navbar>

          {children}
        </Providers>
      </body>
    </html>
  );
}
