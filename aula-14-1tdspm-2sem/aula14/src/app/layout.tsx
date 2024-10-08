import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";
import "@/app/global.css";

export const metadata: Metadata = {
  title: "Meu Boyler Plate",
  description: "Generated by create next app",
};

export const viewport = {
  width:"davice-width",
  initial_scale:1.0,
  colorScheme:"dark"
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
