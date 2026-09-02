import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: "LUCLXBO — Sites, sistemas e IA para negócios",
    description: "Lucas Lobo desenvolve sites de conversão, sistemas sob medida, inteligência artificial e experiências digitais para marcas, profissionais e empresas.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
    openGraph: {
      title: "LUCLXBO — Sites, sistemas e IA que fazem negócios avançarem",
      description: "Desenvolvimento e direção criativa por Lucas Lobo: produtos digitais claros, rápidos e prontos para vender, operar e crescer.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "LUCLXBO — Sites, sistemas e IA para negócios" }],
    },
    twitter: { card: "summary_large_image", title: "LUCLXBO — Sites, sistemas e IA para negócios", images: [socialImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

