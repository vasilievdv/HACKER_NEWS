import React, { useEffect, useRef } from 'react';
import { getStoriesIdRequest } from './actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

import StoryWrapper from '../StoryWrapper';
import { Container, Row, Button } from 'react-bootstrap';

function MainPage() {
  const { data } = useAppSelector((state) => state.storiesId.storiesId);

  const dispatch = useAppDispatch();

  const handleRefresh = () => {
    dispatch(getStoriesIdRequest());
  };

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
      <Button variant="outline-warning" onClick={handleRefresh}>
        Refresh
      </Button>
      <Row>
        {data.map((storyId) => (
          <StoryWrapper key={storyId} storyId={storyId} />
        ))}
      </Row>
    </Container>
  );
}

export default MainPage;
