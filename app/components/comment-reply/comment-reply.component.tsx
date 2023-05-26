import ContentAuthor from '@/app/components/content-author/content-author.component';

const CommentReply = () => {
  return (
    <div>
      <ContentAuthor></ContentAuthor>
      <p className={'nbm-helper-text'}>
        Fresh take Pan. What do you think about Figma?
      </p>
      <input type='text' />
    </div>
  );
};

export default CommentReply;
