import Post from '@/app/components/post/post.component';
import { ASSET_ROUTES } from '@/constants/asset-routes.constant';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './page.module.scss';

const PostPage = () => {
  return (
    <div className={styles.nbmPostPage}>
      <Image
        src={ASSET_ROUTES.SVG.ARROW_LEFT}
        height={32}
        width={32}
        alt={'Back'}
      ></Image>
      <h1 className={clsx([styles.nbmPostPage__title, 'nbm-headline-h1'])}>
        Post
      </h1>
      <Post></Post>
    </div>
  );
};

export default PostPage;
