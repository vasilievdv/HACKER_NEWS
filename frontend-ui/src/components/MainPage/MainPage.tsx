import React, { useEffect } from 'react';
import { getStoriesIdRequest } from './actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

import StoryWrapper from '../StoryWrapper';
import { Container, Row, Button, Alert } from 'react-bootstrap';

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
      <Alert
        variant="success"
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <Button variant="outline-success" onClick={handleRefresh}>
          Refresh
        </Button>
      </Alert>
      <Row>
        {data.map((storyId) => (
          <StoryWrapper key={storyId} storyId={storyId} isTitleAsLink={true} />
        ))}
      </Row>
    </Container>
  );
}

export default MainPage;
