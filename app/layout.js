import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My section",
  description: "بحث عن فوجك الدراسي بسهولة في جامعة ابن زهر",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      dir="rtl"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="w-full min-h-screen">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
