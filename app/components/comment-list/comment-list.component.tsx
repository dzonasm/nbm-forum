import Comment from '@/app/components/comment/comment';
import ContentList from '@/app/components/content-list/content-list.component';
import clsx from 'clsx';
import styles from './styles.module.scss';

const CommentList = () => {
  return (
    <div className={styles.nbmCommentList}>
      <h4 className={clsx(['nbm-headline-h4', styles.nbmCommentList__title])}>
        COMMENTS
      </h4>
      <ContentList>
        <Comment></Comment>
      </ContentList>
    </div>
  );
};

export default CommentList;
