import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import ClientProviders from "@/components/layout/ClientProviders";

export const metadata: Metadata = {
  title: "Faris Group - Total Sports Solutions",
  description:
    "Faris Group is the leading supplier of superior quality sports and entertainment equipment in the Middle East with over 20 years of experience. Your total sports solutions partner.",
  keywords:
    "sports equipment, sports solutions, Middle East sports, padel court, fitness gym, bleachers seating, shooting range, squash courts, construction, supply",
  openGraph: {
    title: "Faris Group - Total Sports Solutions",
    description:
      "Leading supplier of superior quality sports and entertainment equipment in the Middle East with over 20 years of experience.",
    type: "website",
    url: "https://farisgroup.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.add(t);})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWidgets />
        </ClientProviders>
      </body>
    </html>
  );
}
