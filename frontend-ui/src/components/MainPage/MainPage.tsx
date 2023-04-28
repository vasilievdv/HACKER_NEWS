import React, { useEffect } from 'react';
import { getStoriesIdRequest } from './actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

import StoryWrapper from '../StoryWrapper';

function MainPage() {
  const { data } = useAppSelector((state) => state.storiesId.storiesId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStoriesIdRequest());
  }, [dispatch]);

  return (
    <div>
      {data.map((storyId) => (
        <StoryWrapper key={storyId} storyId={storyId} />
      ))}
    </div>
  );
}

export default MainPage;
