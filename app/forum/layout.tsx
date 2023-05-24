import clsx from 'clsx';
import styles from './page.module.scss';

export default function Layout({ children }) {
  return <div className={clsx(styles.nbmForum__layout)}>{children}</div>;
}
