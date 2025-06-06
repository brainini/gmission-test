import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider, Language } from "@/contexts/LanguageContext";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GMISSION - AI Solutions",
  description:
    "GMISSION provides innovative AI-based solutions for digital transformation",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("language")?.value as string | undefined;
  const initialLanguage: Language =
    cookieLang === "ko" || cookieLang === "ja" || cookieLang === "en"
      ? cookieLang
      : "ko";

  return (
    <html lang={initialLanguage}>
      <body className={inter.className}>
        <LanguageProvider initialLanguage={initialLanguage}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
