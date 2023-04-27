import React, { useEffect } from 'react';
import { getDataRequest } from './actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

import StoryWrapper from '../StoryWrapper/StoryWrapper';

function MainPage() {
  const { data } = useAppSelector((state) => state.storiesId.storiesId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataRequest());
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
