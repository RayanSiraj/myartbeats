import type { Metadata } from "next";
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
            <a href="/">My Art Beats</a>{" "}
            <a href="/about">About</a>{" "}
            <a href="/about/mission">Mission</a>{" "}
            <a href="/about/teams">Teams</a>{" "}
            <a href="/chapters/south-florida">South Florida</a>{" "}
            <a href="/chapters/north-florida">North Florida</a>{" "}
            <a href="/join">Join</a>{" "}
            <a href="/events">Events</a>{" "}
            <a href="/contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer>
          <p>My Art Beats</p>
        </footer>
      </body>
    </html>
  );
}
