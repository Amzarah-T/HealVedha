import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heal Vedha",
  description: "Embrace the Ancient Wisdom of Ayurweda for a healthier, balanced life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <Navbar />
        {children}
        <Footer />
      </Providers>
      </body>
    </html>
  );
}
