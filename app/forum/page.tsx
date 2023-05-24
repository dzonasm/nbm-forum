import ContentList from '@/app/components/content-list/content-list.component';
import Post from '@/app/components/post/post.component';
import SearchBar from '@/app/components/search-bar/search-bar.component';
import { Routes } from '@/constants/routes.constant';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Forum() {
  return (
    <>
      <h1 className={clsx(['nbm-headline-h1', styles.nbmForum__title])}>
        Forum
      </h1>
      <SearchBar></SearchBar>
      {/*https://www.embla-carousel.com/get-started/typescript/ */}
      <p>Add a carousel</p>
      <ContentList>
        <li className={styles.nbmForum__postContainer}>
          <Link href={`${Routes.FORUM}/123`}>
            <Post></Post>
          </Link>
        </li>
        <li className={styles.nbmForum__postContainer}>
          <Post></Post>
        </li>
      </ContentList>
    </>
  );
}
