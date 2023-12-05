import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import  SessionProvider  from "./SessionProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className + "p-6"}> 
      
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange

          >
            <SessionProvider>
          
            {children}
            </SessionProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
