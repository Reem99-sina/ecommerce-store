import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToasterProvider from "@/providers/toast-provider";
import getStore from "@/action/get-store"

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "store",
  description: "store",
};
export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider/>
        <ToasterProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
