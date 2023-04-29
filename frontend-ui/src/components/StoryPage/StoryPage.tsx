import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import StoryWrapper from '../StoryWrapper';

function StoryPage() {
  const navigate = useNavigate();
  const { storyId } = useParams<{ storyId: string }>();
  const handlerBack = () => {
    navigate(-1);
  };
  return (
    <Container fluid="md">
      <Button variant="outline-warning" onClick={handlerBack}>
        Back
      </Button>
      <Row>
        <StoryWrapper storyId={Number(storyId)} isComment={true} />
      </Row>
    </Container>
  );
}

export default StoryPage;
