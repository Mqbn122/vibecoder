import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Sidebar } from "@/app/components/Sidebar";
import { SideMenu } from "@/app/components/SideMenu";

export const metadata: Metadata = {
  title: "BookMart",
  description: "Online book store demo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SideMenu />
        <div className="site-layout">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}