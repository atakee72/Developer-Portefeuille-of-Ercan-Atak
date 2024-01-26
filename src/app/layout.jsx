import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal website of Ercan Atak",
  description:
    "Portfolio website of Web Developer Ercan Atak, who is based on in Berlin, Germany",
};

export default function RootLayout({ children }) {
  return (
    <html
      // suppressHydrationWarning
      className="scroll-smooth"
      lang="en"
    >
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
