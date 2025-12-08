import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vikas Singh | Frontend Developer & Digital Marketing Expert",
  description: "Portfolio of Vikas Singh - Frontend Developer specializing in React, Next.js, and Digital Marketing. Electrical Engineering graduate with expertise in web development and paid advertising.",
  keywords: ["Frontend Developer", "React", "Next.js", "Digital Marketing", "SEO", "WordPress", "Shopify", "Google Ads", "Facebook Ads"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${poppins.variable} ${ubuntu.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
