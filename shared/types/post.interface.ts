import { Tag } from '@/shared/types/tag.interface';
import { User } from '@/shared/types/user.interface';

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  user: User;
  likes: number;
  comments: number;
  tags: Tag[];
}
