import clsx from 'clsx';
import styles from './page.module.scss';

export default function Forum() {
  return (
    <>
      <h1 className={clsx(['nbm-headline-h1', styles.nbmForum__title])}>
        Forum
      </h1>
    </>
  );
}
