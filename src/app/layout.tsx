import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aaina - Contemporary Indian Fine Dining Restaurant",
  description:
    "Aaina offers a unique fusion of contemporary Indian cuisine inspired by traditional flavors. Experience authentic Indian dining with fresh ingredients in an elegant atmosphere. Reserve your table today.",
  keywords:
    "Aaina, Indian restaurant, fine dining, Indian cuisine, vegetarian food, contemporary dining, authentic Indian food",
  openGraph: {
    type: "website",
    title: "Aaina - Contemporary Indian Fine Dining Restaurant",
    description:
      "Experience authentic Indian cuisine in an elegant atmosphere. Fresh ingredients, traditional flavors, modern presentation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaina - Contemporary Indian Fine Dining Restaurant",
    description:
      "Experience authentic Indian cuisine in an elegant atmosphere. Fresh ingredients, traditional flavors, modern presentation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
