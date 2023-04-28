import React, { useEffect, useState } from 'react';
import { getStoryById } from '../../requests';
import { Story } from './types';

type Props = {
  storyId: number;
};

function StoryWrapper(props: Props) {
  const [story, setStory] = useState<Story>({});

  useEffect(() => {
    getStoryById(props.storyId)
      .then((data) => setStory(data))
      .catch((e) => console.error(e));
  }, [props.storyId]);

  return <div>Story by: {story.by}</div>;
}

export default StoryWrapper;
