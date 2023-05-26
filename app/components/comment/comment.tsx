import { CommentProps } from '@/app/components/comment/types';
import ContentAuthor from '@/app/components/content-author/content-author.component';
import TextInput from '@/app/components/text-input/text-input.component';
import clsx from 'clsx';
import styles from './styles.module.scss';

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className={styles.nbmComment}>
      <div className={styles.nbmComment__author}>
        <ContentAuthor></ContentAuthor>
      </div>
      <p className={clsx(['nbm-helper-text', styles.nbmComment__content])}>
        Hi Lachy. The best way to find out how XD works is by jumping in and
        playing around with the tools. It’s sink or swim out here and this will
        greatly benifit your understanding.
      </p>
      {/*{comment?.comments.map((reply, index) => (*/}
      {/*  //  some comment list*/}
      {/*  <ContentList key={index}>*/}
      {/*    {reply?.comments.map((replyComment, index) => (*/}
      {/*      <Comment comment={replyComment} key={index} />*/}
      {/*    ))}*/}
      {/*  </ContentList>*/}
      {/*))}*/}
      {/*/!*    replies*!/*/}
      {/*<CommentReply></CommentReply>*/}
      <TextInput></TextInput>
    </div>
  );
};

export default Comment;
