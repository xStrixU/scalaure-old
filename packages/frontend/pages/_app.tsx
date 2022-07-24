import { QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { Layout } from 'components/Layout/Layout';
import { PageLoader } from 'components/PageLoader';

import { AppProviders } from 'providers/AppProviders';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AppProviders client={queryClient}>
      <PageLoader>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageLoader>
    </AppProviders>
  );
};

export default App;
