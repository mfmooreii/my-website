import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Texas BBQ | Best Slow-Smoked BBQ in Austin, TX",
  description: "Award-winning pit-smoked BBQ in Austin, Texas. Brisket, ribs, pulled pork, and more — slow-smoked over oak and mesquite since 1987. Reserve a private room for your next event.",
  keywords: [
    "Texas BBQ", "BBQ Austin TX", "best BBQ Austin", "brisket Austin",
    "smoked ribs Austin", "BBQ restaurant Austin", "private dining Austin",
    "slow smoked BBQ", "Texas brisket", "BBQ catering Austin",
  ],
  authors: [{ name: "Texas BBQ" }],
  creator: "Texas BBQ",
  metadataBase: new URL("https://texasbbq.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://texasbbq.com",
    siteName: "Texas BBQ",
    title: "Texas BBQ | Best Slow-Smoked BBQ in Austin, TX",
    description: "Award-winning pit-smoked BBQ in Austin, Texas. Brisket, ribs, pulled pork, and more — slow-smoked over oak and mesquite since 1987.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Texas BBQ slow-smoked brisket and ribs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas BBQ | Best Slow-Smoked BBQ in Austin, TX",
    description: "Award-winning pit-smoked BBQ in Austin, Texas since 1987. Brisket, ribs, pulled pork, and private dining rooms.",
    images: ["https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Texas BBQ",
  description: "Award-winning pit-smoked BBQ in Austin, Texas. Slow-smoked over oak and mesquite since 1987.",
  url: "https://texasbbq.com",
  telephone: "+15125550187",
  email: "info@texasbbq.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2420 South Lamar Blvd",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78704",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2500,
    longitude: -97.7667,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "11:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "11:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "12:00", closes: "20:00" },
  ],
  servesCuisine: ["BBQ", "American", "Southern"],
  priceRange: "$$",
  image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1200&q=80",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "6200",
    bestRating: "5",
  },
  hasMenu: "https://texasbbq.com/#menu",
  acceptsReservations: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="min-h-screen bg-stone-950 text-stone-100">{children}</body>
    </html>
  );
}
