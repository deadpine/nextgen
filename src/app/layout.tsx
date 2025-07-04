import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unlock",
  description: "equipo de primos como next gen",
  openGraph: {
    title: 'Unlock',
    description: 'equipo de primos como next gen',
    images: [
      {
        url: 'https://unlockng.puertoasis.com/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: '4 personas caminando juntas',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
