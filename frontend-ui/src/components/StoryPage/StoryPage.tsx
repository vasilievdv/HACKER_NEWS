import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container, Row, Button, Alert } from 'react-bootstrap';
import StoryWrapper from '../StoryWrapper';

function StoryPage() {
  const navigate = useNavigate();
  const { storyId } = useParams<{ storyId: string }>();
  const handlerBack = () => {
    navigate(-1);
  };
  return (
    <Container fluid="md">
      <Alert
        variant="success"
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <Button variant="outline-success" onClick={handlerBack}>
          Back
        </Button>
      </Alert>
      <Row>
        <StoryWrapper
          storyId={Number(storyId)}
          isComment={true}
          isManage={true}
        />
      </Row>
    </Container>
  );
}

export default StoryPage;
