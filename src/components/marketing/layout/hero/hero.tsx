import { Button, buttonVariants } from '@/components/ui/button';

import { HeroCards } from './hero-cards';

import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const Hero = () => {
  return (
    <section className="container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
              Dashboard
            </span>{' '}
            Application
          </h1>{' '}
          for{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              E-Commerce
            </span>{' '}
            platforms
          </h2>
        </main>
        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          Explore real-time e-commerce insights: track sales, monitor trends, and manage
          inventory—all from your comprehensive dashboard.
        </p>
        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <Button className="w-full md:w-1/3">Get Started</Button>
          <a
            rel="noreferrer noopener"
            href="https://github.com/damla/nextjs-dashboard"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: 'outline'
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="z-10">
        <HeroCards />
      </div>
    </section>
  );
};
