import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">{children}</main>
  );
};
