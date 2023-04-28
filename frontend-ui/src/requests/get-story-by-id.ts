import axios from 'axios';
import { HACKER_NEWS_BASE_URL } from './constatnts';
import { Story } from '../components/StoryWrapper';

export const getStoryById = async (id: number) => {
  const { data } = await axios.get<Story>(
    `${HACKER_NEWS_BASE_URL}item/${id}.json?print=pretty`
  );

  return data;
};
