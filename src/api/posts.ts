import { requestWithoutJwt } from './request';
import { Post } from '@/types/posts';

export const getAllPosts = (): Promise<Post[]> =>
  requestWithoutJwt.get('/posts');
