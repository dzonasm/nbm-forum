import MainCta from '@/app/main/main-cta';
import styles from './page.module.scss';

export default function Main() {
  return (
    <>
      <img className={styles.nbmMain__image} src='images/nbm-hero.png' alt='' />
      <MainCta></MainCta>
    </>
  );
}
