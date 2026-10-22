import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import ReduxProvider from "@/lib/provider/redux_provider";
import GoogleProvider from "@/lib/provider/google_provider";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motive Motor Collection | Lusaka",
  description: "A considered collection of exceptional cars, thoughtfully chosen in Lusaka, Zambia.",

  applicationName: "Motive Motor Collection",
  manifest: "/manifest.json",
  icons: { icon: "/motive-icon.svg" },

  openGraph: {
    title: "Motive Motor Collection | Lusaka",
    description: "A considered collection of exceptional cars, thoughtfully chosen in Lusaka, Zambia.",
    siteName: "Motive Motor Collection",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Motive Motor Collection | Lusaka",
    description: "A considered collection of exceptional cars, thoughtfully chosen in Lusaka, Zambia.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f8f5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8f8f5] text-[#22251f]`}>
        <Toaster />
        <NextTopLoader color="#b8d77b" showSpinner={false} />
        <GoogleProvider>
        <ReduxProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ReduxProvider>
        </GoogleProvider>
      </body>
    </html>
  );
}
