import clsx from 'clsx';
import { NextPage } from 'next';
import styles from './styles.module.scss';

const TextInput: NextPage = () => {
  return (
    <div>
      <input
        className={clsx(['nbm-helper-text', styles.nbmTextInput])}
        type='text'
        placeholder='Write a reply ...'
      />
    </div>
  );
};

export default TextInput;
