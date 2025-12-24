import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export const metadata: Metadata = {
  title: "GameDev Hub",
  description: "Indie games and game development articles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <PrimeReactProvider>
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>
          <Toaster position="top-right" />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
