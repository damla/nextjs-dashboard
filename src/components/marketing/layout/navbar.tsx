'use client';

import { SignInGithubButton } from '@/components/authentication/sign-in/sign-in-github-button';
import { ModeToggle } from '@/components/common/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { routeList } from './data';
import { RouteProps } from './types';

import { DropletIcon, Menu } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-14 w-screen justify-between px-4">
          <NavigationMenuItem className="flex font-bold">
            <a rel="noreferrer noopener" href="/" className="ml-2 flex text-xl font-bold">
              <DropletIcon />
              Dashboard App
            </a>
          </NavigationMenuItem>
          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex h-5 w-5 md:hidden" onClick={() => setIsOpen(true)} />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">Dashboard App</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </a>
                  ))}
                  <SignInGithubButton />
                </nav>
              </SheetContent>
            </Sheet>
          </span>
          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost'
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>
          <div className="hidden gap-2 md:flex">
            <SignInGithubButton />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
