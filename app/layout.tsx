import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "GameDev Hub",
  description: "Indie games and game development articles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
