import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';

type Props = {
  storyId: number;
};

function StoryWrapper(props: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getStory(storyId));
  }, [dispatch]);

  return <div>Story Id: {props.storyId}</div>;
}

export default StoryWrapper;
