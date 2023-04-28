import axios from 'axios';
import { HACKER_NEWS_BASE_URL } from './constatnts';

export const getStoriesId = async () => {
  const { data } = await axios.get<number[]>(
    `${HACKER_NEWS_BASE_URL}newstories.json?print=pretty`
  );
  return data;
};
