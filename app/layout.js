import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Escola SOMA · Abrantes, Camaçari",
  description:
    "Escola SOMA — o Sorriso Mágico de Abrantes, Camaçari-BA. Do Grupo 2 ao Ensino Médio, desde 1997, nas unidades Soma Vila e Soma Garden.",
  icons: { icon: "/brand/simbolo-s.png" },
};

export const viewport = {
  themeColor: "#e2f9fd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
