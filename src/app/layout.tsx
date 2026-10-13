import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const geistSans = localFont({
  src: "../../public/fonts/Geist-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../../public/fonts/GeistMono-Variable.ttf",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sushil Kumar — Full-Stack Developer",
  description:
    "Portfolio of Sushil Kumar, a full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture. Open to full-time roles and freelance projects.",
  metadataBase: new URL("https://www.devsushil.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Sushil Kumar — Full-Stack Developer",
    description:
      "Portfolio of Sushil Kumar, a full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sushil Kumar — Full-Stack Developer portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushil Kumar — Full-Stack Developer",
    description:
      "Portfolio of Sushil Kumar, a full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sushil Kumar",
  url: "https://www.devsushil.in/",
  image: "https://www.devsushil.in/images/hero.jpg",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture.",
  sameAs: [
    "https://github.com/sushilbyte7",
    "https://www.linkedin.com/in/sushilbyte7",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Pimpri Chinchwad University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressCountry: "IN",
      },
    },
  ],
  knowsAbout: [
    "React.js",
    "Node.js",
    "TypeScript",
    "Docker",
    "AWS",
    "Android Development",
    "Machine Learning",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
