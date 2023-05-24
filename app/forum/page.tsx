import Post from '@/app/components/post/post.component';
import SearchBar from '@/app/components/search-bar/search-bar.component';
import clsx from 'clsx';
import styles from './page.module.scss';

export default function Forum() {
  return (
    <>
      <h1 className={clsx(['nbm-headline-h1', styles.nbmForum__title])}>
        Forum
      </h1>
      <SearchBar></SearchBar>
      <p>Add a carousel</p>
      <Post></Post>
    </>
  );
}
