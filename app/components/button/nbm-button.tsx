import styles from './styles.module.scss';

export default function NbmButton({ children }) {
  return <button className={styles.nbmButton}>{children}</button>;
}
