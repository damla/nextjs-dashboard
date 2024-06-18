import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { MainProvider } from '@/components/providers';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Dashboard',
  description: 'Dashboard application created with NextJS and schadcn/ui'
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MainProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </MainProvider>
      </body>
    </html>
  );
}
