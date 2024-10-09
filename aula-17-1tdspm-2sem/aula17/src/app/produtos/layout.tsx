import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRODUTOS",
  description: "Criado por Rei Luizinho",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (

    <div>  
      <p>...</p>
      {children}
    </div>
    
  );
}
