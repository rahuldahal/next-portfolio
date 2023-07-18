import './globals.css';
import { Metadata } from 'next';
import { metaData } from '../constants';

const { title, description, authors, keywords } = metaData;

export const metadata: Metadata = {
  title,
  description,
  authors,
  keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
