import axios from 'axios';
import { HACKER_NEWS_BASE_URL } from './constatnts';
import { Comment } from '../components/CommentBox';

export const getCommentById = async (id: number) => {
  const { data } = await axios.get<Comment>(
    `${HACKER_NEWS_BASE_URL}item/${id}.json?print=pretty`
  );

  return data;
};
