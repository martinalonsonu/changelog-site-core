import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import { Mona_Sans } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Site & Core Team - Changelog",
  description: "Documentación de los proyectos realizados por Site & Core Team",
};

const mona = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // opcional: puedes especificar los pesos
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mona.className} bg-black flex flex-col min-h-screen`}>
        <HeaderNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
