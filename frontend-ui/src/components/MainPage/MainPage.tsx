import React, { useEffect } from 'react';
import { getStoriesIdRequest } from './actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

import StoryWrapper from '../StoryWrapper';
import { Container, Row } from 'react-bootstrap';

function MainPage() {
  const { data } = useAppSelector((state) => state.storiesId.storiesId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStoriesIdRequest());
    const refreshInterval = setInterval(() => {
      dispatch(getStoriesIdRequest());
    }, 60000);
    return () => {
      clearInterval(refreshInterval);
    };
  }, [dispatch]);

  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        {data.map((storyId) => (
          <StoryWrapper key={storyId} storyId={storyId} />
        ))}
      </Row>
    </Container>
  );
}

export default MainPage;
