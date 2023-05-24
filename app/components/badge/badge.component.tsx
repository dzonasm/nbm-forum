import clsx from 'clsx';
import styles from './styles.module.scss';

export default function Badge({ children }) {
  return <div className={clsx(styles.nbmBadge)}>{children}</div>;
}
