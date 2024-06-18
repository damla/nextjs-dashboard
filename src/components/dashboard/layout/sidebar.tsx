'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';

import { Home, Package2, Settings, ShoppingCart } from 'lucide-react';

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href={ROUTES.home}
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Dashboard App</span>
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={ROUTES.dashboard}
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-lg hover:text-foreground md:h-8 md:w-8',
                {
                  ['bg-accent text-accent-foreground transition-colors']:
                    pathname === ROUTES.dashboard,
                  ['text-muted-foreground transition-colors']: pathname !== ROUTES.dashboard
                }
              )}
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={ROUTES.payments}
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-lg hover:text-foreground md:h-8 md:w-8',
                {
                  ['bg-accent text-accent-foreground transition-colors']:
                    pathname === ROUTES.payments,
                  ['text-muted-foreground transition-colors']: pathname !== ROUTES.payments
                }
              )}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Orders</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Orders</TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};
