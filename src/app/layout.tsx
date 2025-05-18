
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider/theme-provider";
import Navbar from "@/components/customUi/Navbar";
import Footer from "@/components/customUi/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { Toaster } from 'sonner';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Md Sakib Al Hasan",
  description: "Passionate Web Developer specializing in React, Next.js, and Tailwind CSS. Crafting dynamic and user-friendly web applications with attention to detail.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const session = await getServerSession(authOptions)
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`bg-white  dark:bg-[#1f232e] ${roboto.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar session={session} />
          <Toaster  richColors  /> 
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
