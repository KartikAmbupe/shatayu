import './globals.css';
import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: 'Shatayu - Organic Living',
  description: 'Pure organic products for a healthier life',
  icons:{
    icon: '/images/favicon.png',
    source: '/images/favicon.png',
    apple: '/images/favicon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.className} font-sans text-gray-800 bg-green-50`}>
        {children}
      </body>
    </html>
  );
}