import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Heal Vedha",
  description: "Embrace the Ancient Wisdom of Ayurweda for a healthier, balanced life",
};

export default function RootLayout({ children }) {
  const session = auth();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <SessionProvider session={session}>
            <Navbar />
            {children}
            <Footer />
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
