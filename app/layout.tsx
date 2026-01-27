import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Dentistree Dental Clinic | Best Dentist in Nanded City, Pune",
    template: "%s | Dentistree Dental Clinic"
  },
  description: "Experience pain-free dentistry at Dentistree Dental Clinic in Nanded City, Pune. Dr. Poonam Bambarkar offers expert Root Canals, Implants, Kids Dentistry & Cosmetic treatments.",
  keywords: [
    "Dentist in Nanded City Pune",
    "Dental Clinic Nanded City",
    "Best Dentist in Pune",
    "Root Canal Treatment Pune",
    "Dental Implants Pune",
    "Pediatric Dentist Nanded City",
    "Cosmetic Dentist Pune",
    "Teeth Whitening Pune",
    "Invisalign Provider Pune",
    "Emergency Dentist Nanded City"
  ],
  authors: [{ name: "Dr. Poonam Bambarkar", url: "https://dentistreepune.com" }],
  creator: "Dentistree Dental Clinic",
  metadataBase: new URL("https://dentistreepune.com"), // Replace with actual domain if different
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dentistreepune.com",
    siteName: "Dentistree Dental Clinic",
    title: "Dentistree Dental Clinic | Top Rated Dentist in Nanded City, Pune",
    description: "Your trusted family dentist in Nanded City. Specializing in advanced root canals, cosmetic smiles, and gentle pediatric care. Book your visit today!",
    images: [
      {
        url: "/assests/clinic1.png",
        width: 1200,
        height: 630,
        alt: "Dentistree Dental Clinic Interior",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/assests/logo.png",
    apple: "/assests/logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://dentistreepune.com/#localbusiness",
    "name": "Dentistree Dental Clinic",
    "image": [
      "https://dentistreepune.com/assests/clinic1.png",
      "https://dentistreepune.com/assests/doctor-2.png"
    ],
    "telephone": "+918237156777",
    "priceRange": "₹₹",
    "url": "https://dentistreepune.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 11, R5/10, Nanded City",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4771, // Approximate coords for Nanded City, verify if exact known
      "longitude": 73.8016
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/dentistreepune",
      "https://www.instagram.com/dentistreepune"
    ]
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={businessSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
