import type { Metadata } from "next";
import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";
import Preloader from "@/components/ui/preloader";

/* ---------------------------------------------------------------------------
   HEADING TYPEFACE
   Swapped Poppins -> Instrument Sans. Poppins is a geometric display face
   (perfect circles, single-storey 'a') that reads friendly/startup rather than
   established. Instrument Sans is slightly narrower with a taller x-height and
   a two-storey 'a' — it reads as a company that has been operating since 2016.

   To try an alternative, change ONLY these two lines:
     Manrope  -> import { Manrope } from "next/font/google";  weight ["500","600","700","800"]
     Figtree  -> import { Figtree } from "next/font/google";  weight ["500","600","700","800"]
--------------------------------------------------------------------------- */
const headingFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading-sans",
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CorpX | Deep Cleaning Services in Pune, Mumbai, Bangalore & Hyderabad",
    template: "%s | CorpX",
  },
  description:
    "Professional deep cleaning for homes, offices and commercial properties across Pune, Mumbai, Hyderabad and Bangalore. ISO 9001:2015 certified, verified staff, transparent pricing. Serving since 2016.",
  metadataBase: new URL("https://mycorpx.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Deep Cleaning Services in Pune",
    "Home Cleaning Mumbai",
    "Office Cleaning Bangalore",
    "Sofa Cleaning Pune",
    "Kitchen Cleaning Hyderabad",
    "Bathroom Cleaning Pune",
    "Commercial Cleaning Services India",
  ],
  openGraph: {
    title: "CorpX | Deep Cleaning Services",
    description:
      "Deep cleaning for homes, offices and commercial spaces across Pune, Mumbai, Hyderabad and Bangalore. ISO 9001:2015 certified.",
    type: "website",
    locale: "en_IN",
    siteName: "CorpX",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body className="font-body antialiased bg-white text-neutral-900 selection:bg-[#006fe3]/10 selection:text-[#006fe3]">

        <Preloader />

        <div className="flex min-h-screen flex-col relative">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <FloatingContactButtons />
      </body>
    </html>
  );
}