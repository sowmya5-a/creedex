// app/layout.tsx
import '../styles/globals.css';
import '../styles/main.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SoftSell App',
  description: '...'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen pt-14">
        {/* Centered, responsive wrapper */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
