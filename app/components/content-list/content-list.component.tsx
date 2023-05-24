import styles from './styles.module.scss';

const ContentList = ({ children }) => {
  return <ul className={styles.nbmList}>{children}</ul>;
};

export default ContentList;
