import type { Metadata } from "next";
import { Providers } from "../providers";
import "./global.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Connect VPN",
    description: "buy affordable VPN service",
  };
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
