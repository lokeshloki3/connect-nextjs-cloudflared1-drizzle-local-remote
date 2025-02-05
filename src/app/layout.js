// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Connect',
  description: 'Connect',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
