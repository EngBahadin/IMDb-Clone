import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB clone",
  description: "This is a movie database clone",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark:bg-[#000000d2] ${inter.className}`}>
        <Providers>
          <Header>
            <SearchBox />
          </Header>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
