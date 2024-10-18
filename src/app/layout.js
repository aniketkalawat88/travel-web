import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Providers } from "./redux/provider";
import FormPopup from "./_components/form-popup";
import 'react-toastify/dist/ReactToastify.css';
import Whatsapp from "./_components/Whatsapp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tour and Travel",
  description: "Suhana Tours and Travel",
};

export default function RootLayoutFor({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Providers>
        <Navbar />
        <FormPopup />
        <Whatsapp />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
