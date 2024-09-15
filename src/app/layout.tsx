import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import Footer from "@/components/footer/footer";
import ThemeProvider from "@/components/ThemeContext";



export const metadata: Metadata = {
  title: "SonicVoltex",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="w-screen h-screen flex flex-col">
        <ThemeProvider>
          <main className="md:flex md:flex-1">
            <aside className="md:w-1/6 w-screen">
              <Sidebar />
            </aside>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
