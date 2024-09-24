import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"; // Import Space Grotesk font
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// Load the Space Grotesk font with subsets
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DamnData Pvt. Ltd.",
  description: "Your go to data org.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={spaceGrotesk.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
  );
}
