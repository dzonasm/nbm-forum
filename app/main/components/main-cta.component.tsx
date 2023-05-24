import NbmButton from '@/app/components/button/nbm-button.component';
import {Routes} from "@/constants/routes.constant";
import clsx from 'clsx';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function MainCta() {
  return (
    <div className={styles.nbmCta__container}>
      <h2 className={clsx('nbm-headline-h1')}>
        Welcome to
        <br />
        the NBM Forum
      </h2>
      <p className={clsx(['nbm-helper-text', 'nbm-text--color-on-background'])}>
        Time to get all the answers you need in a forum made for designers and
        developers!
      </p>
      <div className={styles.nbmCta__actionContainer}>
        <Link href={`/${Routes.FORUM}`}>
          <NbmButton>
            <p className={clsx(['nbm-helper-text'])}>Jump In!</p>
          </NbmButton>
        </Link>
      </div>
    </div>
  );
}
