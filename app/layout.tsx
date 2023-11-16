import type { Metadata } from "next";
import { Inter, Limelight } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from '@clerk/themes';
import { Lightbulb } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova Forge",
  description: "NOVA FORGE GLOBAL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    // appearance={{
    //   baseTheme: dark,
    //   signIn:{ baseTheme: neobrutalism}
    // }}
    
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
