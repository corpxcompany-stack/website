import type { Metadata } from "next";

/* The About page is a client component ("use client") because of Framer Motion,
   and client components cannot export `metadata`. Without this file the page
   inherits the site-wide title and description — so it competes with the
   homepage in search instead of ranking for brand and trust queries.

   A layout in the same folder is a server component by default, so metadata
   declared here applies to /about. Same pattern works for /services, /faqs
   and /contact, which currently have the same gap. */

export const metadata: Metadata = {
  title: "About Us — Cleaning With Care Since 2016",
  description:
    "CorpX has been deep cleaning homes, offices and commercial properties across Pune, Mumbai, Bangalore and Hyderabad since 2016. ISO 9001:2015 certified, trained and background-verified teams.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About CorpX — Cleaning With Care Since 2016",
    description:
      "Trained, background-verified cleaning teams serving Pune, Mumbai, Bangalore and Hyderabad since 2016.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}