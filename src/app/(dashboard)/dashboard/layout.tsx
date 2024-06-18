import { Metadata } from 'next';

import { Main } from '@/components/dashboard/layout/main';
import { Navbar } from '@/components/dashboard/layout/navbar';
import { Sidebar } from '@/components/dashboard/layout/sidebar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard'
};

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Navbar />
        <Main>{children}</Main>
      </div>
    </div>
  );
}
