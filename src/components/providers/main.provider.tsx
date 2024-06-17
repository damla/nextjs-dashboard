import { type ThemeProviderProps } from 'next-themes/dist/types';

import { ThemeProvider } from './theme/theme.provider';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

type MainProviderProps = ThemeProviderProps & Props;

export const MainProvider = ({ children, ...themeProps }: MainProviderProps) => (
  <ThemeProvider {...themeProps}>{children}</ThemeProvider>
);
