import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'


// Constants for metadata
const title: string = "Expo Auto Body";
const description: string = "Expo Auto Body is a well-established, family-owned collision repair center, proudly serving our customers for over three decades.";
const url_icon: string = "/expo-auto-body-icon.svg";
const url_logo: string = "/expo-auto-body-logo.png";
export const metadata: Metadata = {
  title,
  description,
  icons: { icon: url_icon },
  openGraph: {
    title,
    description,
    images: [{ url: url_logo }]
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [url_logo],
  },
};

// Font: Open Sans
const font = Open_Sans({ subsets: ['latin'] })


export default function Layout({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {

  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
