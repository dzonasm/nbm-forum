import clsx from 'clsx';
import styles from './styles.module.scss';

export default function PostAuthor() {
  return (
    <div className={clsx(styles.nbmPostAuthor__author)}>
      <h4 className={clsx('nbm-helper-text')}>Test Testatowich</h4>
      <div className={clsx(styles.nbmPostAuthor__dot)}></div>
      <span className={clsx(['nbm-helper-text', styles.nbmPostAuthor__date])}>
        28-10-2023
      </span>
    </div>
  );
}
