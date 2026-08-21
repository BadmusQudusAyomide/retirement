import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birthday and Retirement Celebration",
  description:
    "A premium celebration website honoring a special birthday and a remarkable retirement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
