import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal website of Ercan Atak",
  description:
    "Portfolio website of Web Developer Ercan Atak, who is based on in Berlin, Germany",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#f38083]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
