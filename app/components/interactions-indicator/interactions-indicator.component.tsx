import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function InteractionsIndicator() {
  return (
    <div className={clsx(styles.nbmInteractionsIndicator)}>
      <Image src='/icons/png/comment.png' width={22} height={20} />
      <span
        className={clsx([
          'nbm-helper-text',
          styles.nbmInteractionsIndicator__count,
        ])}
      >
        3
      </span>
    </div>
  );
}
