import clsx from 'clsx';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={clsx([styles.main])}>
      <span
        className={clsx(['nbm-helper-text', 'nbm-text--color-on-background'])}
      >
        hello nbm
      </span>
    </main>
  );
}
