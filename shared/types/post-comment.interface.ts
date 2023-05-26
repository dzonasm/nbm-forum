import { User } from '@/shared/types/user.interface';

export interface PostComment {
  id: number;
  text: string;
  userId: number;
  postId: number;
  createdAt: Date;
  user: User;
  // reply comment id[]
  comments: number[];
}
