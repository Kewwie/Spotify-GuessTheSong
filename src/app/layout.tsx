import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guess the Song",
  description: "A website where u can guess the song",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
