import clsx from 'clsx';
import styles from './styles.module.scss';

export default function Post() {
  return (
    <div className={clsx(styles.nbmPost)}>
      <div>
        <h4 className={clsx('nbm-helper-text')}>Test Testatowich</h4>
      </div>
    </div>
  );
}
