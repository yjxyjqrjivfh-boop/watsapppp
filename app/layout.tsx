import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hi History MVP',
  description: 'Быстрый MVP исторического quiz-сервиса'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
