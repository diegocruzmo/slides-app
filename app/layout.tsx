import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { clerkEs } from "../clerk/localization";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slides App",
  description: "Página de Slides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={clerkEs}
      appearance={{
        elements: {
          headerTitle: { display: "none" },
          headerSubtitle: { display: "none" },
        },
      }}
    >
      <html lang="en">
        <body className={`${roboto.className} md:mx-6 antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
