import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query/src/QueryClientProvider';
import clsx from 'clsx';
import styles from './page.module.scss';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={clsx([styles.main])}>
        <span
          className={clsx(['nbm-helper-text', 'nbm-text--color-on-background'])}
        >
          hello nbm
        </span>
      </main>
    </QueryClientProvider>
  );
}
