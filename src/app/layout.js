// src/app/layout.js
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${fontHeading.variable} ${fontBody.variable}`}>
        {children}
      </body>
    </html>
  );
}
