import { ASSET_ROUTES } from '@/constants/asset-routes.constant';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function InteractionsIndicator() {
  return (
    <div className={clsx(styles.nbmInteractionsIndicator)}>
      <Image src={ASSET_ROUTES.PNG.COMMENT} width={22} height={20} />
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
