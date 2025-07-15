import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "A Journey Through the Lens – AU United Photography Club Farewell | Keshav Atal",
  description:
    "Reflections on three years of growth, community, and countless memories at AU United Photography Club. By Keshav Atal, Outgoing Head (2022–2025).",
  generator: "Next.js",
  icons: {
    icon: "/au-united-logo.png",
    shortcut: "/au-united-logo.png",
    apple: "/au-united-logo.png",
  },
  openGraph: {
    title: "A Journey Through the Lens – AU United Photography Club Farewell | Keshav Atal",
    description:
      "Reflections on three years of growth, community, and countless memories at AU United Photography Club. By Keshav Atal, Outgoing Head (2022–2025).",
    url: "https://auunitedphotographyclub.netlify.app/",
    siteName: "AU United Photography Club",
    images: [
      {
        url: "/au-united-logo.png",
        width: 512,
        height: 512,
        alt: "AU United Photography Club Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Journey Through the Lens – AU United Photography Club Farewell | Keshav Atal",
    description:
      "Reflections on three years of growth, community, and countless memories at AU United Photography Club. By Keshav Atal, Outgoing Head (2022–2025).",
    images: ["/au-united-logo.png"],
    creator: "@an_imaginator_world",
  },
  authors: [{ name: "Keshav Atal", url: "https://keshavatal.com.np/" }],
  keywords: [
    "AU United Photography Club",
    "Farewell",
    "Keshav Atal",
    "Andhra University",
    "Photography",
    "Student Club",
    "2022-2025",
    "Memories",
    "Community",
    "Growth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
