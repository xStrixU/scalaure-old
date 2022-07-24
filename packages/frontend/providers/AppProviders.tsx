import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
  client: QueryClient;
  children: ReactNode;
}>;

export const AppProviders = ({ client, children }: AppProvidersProps) => (
  <QueryClientProvider client={client}>
    {children}
    <ReactQueryDevtools />
  </QueryClientProvider>
);
