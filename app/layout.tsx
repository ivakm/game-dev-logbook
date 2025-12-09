import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Game Dev Logbook",
  description: "Personal development log for game projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
