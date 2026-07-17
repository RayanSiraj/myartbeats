import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Art Beats",
  description: "The My Art Beats nonprofit site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav aria-label="Main navigation">
            <Link href="/">My Art Beats</Link>{" "}
            <Link href="/about">About</Link>{" "}
            <Link href="/about/mission">Mission</Link>{" "}
            <Link href="/about/teams">Teams</Link>{" "}
            <Link href="/chapters/south-florida">South Florida</Link>{" "}
            <Link href="/chapters/north-florida">North Florida</Link>{" "}
            <Link href="/join">Join</Link>{" "}
            <Link href="/events">Events</Link>{" "}
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>My Art Beats</p>
        </footer>
      </body>
    </html>
  );
}
