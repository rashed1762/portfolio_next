import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TransitionProvider from "@/components/transitionProvider";
import PreLoader from "@/components/Preloader/preloader";
import Speedial from "@/components/AnimButton/Speedial";
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rashedul islam",
  description: "Full stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      
      <body className={inter.className}>
       
        <TransitionProvider>
          <>
          <Toaster />
          {children}
          
          </>
          
          </TransitionProvider>
        </body>
    </html>
  );
}
