import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://elcaminodelbuda-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "El Camino del Buda — Meditacion Budista y Mindfulness",
  description:
    "El Camino del Buda es tu companero de meditacion budista y mindfulness para iPhone. Meditaciones guiadas, ensenanzas del Dharma, practica diaria de atencion plena. Sin anuncios, sin cuentas, sin recopilacion de datos.",
  keywords: [
    "meditacion budista",
    "mindfulness",
    "budismo",
    "atencion plena",
    "meditacion guiada",
    "dharma",
    "app meditacion iOS",
    "meditacion iPhone",
  ],
  authors: [{ name: "Alejandro Hernandez Mitre" }],
  creator: "Alejandro Hernandez Mitre",
  publisher: "Alejandro Hernandez Mitre",
  openGraph: {
    title: "El Camino del Buda — Meditacion Budista y Mindfulness",
    description:
      "Tu companero de meditacion budista para iPhone. Meditaciones guiadas, ensenanzas del Dharma y practica diaria de mindfulness. Privacidad total, sin cuentas requeridas.",
    url: BASE_URL,
    siteName: "El Camino del Buda",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "El Camino del Buda - App de Meditacion Budista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Camino del Buda — Meditacion Budista",
    description:
      "Tu companero de meditacion budista para iPhone. Privacidad total, sin cuentas requeridas.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "El Camino del Buda",
  description:
    "Aplicacion de meditacion budista y mindfulness para iPhone. Meditaciones guiadas, ensenanzas del Dharma, practica diaria de atencion plena.",
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Meditation",
  inLanguage: "es",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Alejandro Hernandez Mitre",
  },
  datePublished: "2026-01-01",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-zen-950 text-amber-100 antialiased">
        {children}
      </body>
    </html>
  );
}
