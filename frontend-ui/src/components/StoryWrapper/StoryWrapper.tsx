import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { getStoryById } from '../../requests';
import { Story } from './types';
import { Link } from 'react-router-dom';
import CommentBox from '../CommentBox';

type Props = {
  storyId: number;
  isComment?: boolean;
};

function StoryWrapper(props: Props) {
  const [{ by, score, time, title, url, id, kids }, setStory] = useState<Story>({});
  const { storyId, isComment } = props;

  useEffect(() => {
    getStoryById(storyId)
      .then((data) => setStory(data))
      .catch((e) => console.error(e));
  }, [storyId]);

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Card.Subtitle className="mb-2 text-muted">{by}</Card.Subtitle>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'right' }}>
            <Card.Subtitle>
              {time && new Date(time * 1000).toLocaleDateString('en-GB')}
            </Card.Subtitle>
          </Col>
        </Row>
        <Card.Link as={Link} to={`/story/${id!}`}>
          <Card.Title>{title}</Card.Title>
        </Card.Link>
        {/* <Card.Text>
          asdfsadfsad
        </Card.Text> */}
      </Card.Body>
      {isComment &&
        kids &&
        kids.map((commentId) => (
          <CommentBox key={commentId} commentId={commentId} />
        ))}
    </Card>
  );
}

export default StoryWrapper;
