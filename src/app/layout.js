// Import necessary modules
import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anirudh Portfolio",
  description: "Anirudh portfolio",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Include the new favicon meta tag */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Other head elements go here */}
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
