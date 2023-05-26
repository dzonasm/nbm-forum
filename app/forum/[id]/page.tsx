import CommentListComponent from '@/app/components/comment-list/comment-list.component';
import Post from '@/app/components/post/post.component';
import { ASSET_ROUTES } from '@/constants/asset-routes.constant';
import { Routes } from '@/constants/routes.constant';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

const PostPage = () => {
  return (
    <div className={styles.nbmPostPage}>
      <div className={styles.nbmPostPage__titleContainer}>
        <Link href={`/${Routes.FORUM}`}>
          <Image
            src={ASSET_ROUTES.SVG.ARROW_LEFT}
            className={styles.nbmPostPage__back}
            height={32}
            width={32}
            alt={'Back'}
          ></Image>
        </Link>
        <h1 className={clsx([styles.nbmPostPage__title, 'nbm-headline-h1'])}>
          Post
        </h1>
      </div>
      <Post></Post>
      <div className={styles.nbmPostPage__divider}></div>
      <CommentListComponent></CommentListComponent>
    </div>
  );
};

export default PostPage;
