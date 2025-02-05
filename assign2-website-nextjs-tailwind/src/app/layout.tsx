import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
       <Footer /> 
        
      </body>
    </html>
  );
}
