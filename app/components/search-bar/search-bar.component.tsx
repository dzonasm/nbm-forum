import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function SearchBar() {
  return (
    <div className={clsx(styles.nbmSearchBar__container)}>
      <div className={clsx(styles.nbmSearchBar__iconContainer)}>
        <Image src='icons/svg/magnifier.svg' width={26} height={26} alt='' />
      </div>
      <input
        className={clsx(['nbm-helper-lead', styles.nbmSearchBar])}
        type='text'
        placeholder={'SEARCH'}
      />
    </div>
  );
}
