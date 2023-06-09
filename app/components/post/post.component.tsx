import Badge from '@/app/components/badge/badge.component';
import ContentAuthor from '@/app/components/content-author/content-author.component';
import InteractionsIndicator from '@/app/components/interactions-indicator/interactions-indicator.component';
import clsx from 'clsx';
import styles from './styles.module.scss';

export default function Post() {
  return (
    <div className={clsx(styles.nbmPost)}>
      <div className={clsx(styles.nbmPost__wrapper)}>
        <ContentAuthor></ContentAuthor>
      </div>
      <div className={clsx(styles.nbmPost__wrapper)}>
        <h1 className={clsx('nbm-headline-h1')}>
          XD vs Figma, you tell me what is better. Please …
        </h1>
      </div>
      <div className={clsx(styles.nbmPost__wrapper)}>
        <Badge>
          <span>Design</span>
        </Badge>
      </div>
      <InteractionsIndicator></InteractionsIndicator>
    </div>
  );
}
