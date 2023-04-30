import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { getStoryById } from '../../requests';
import { Story } from './types';
import { Link } from 'react-router-dom';
import CommentBox from '../CommentBox';

type Props = {
  storyId: number;
  isComment?: boolean;
  isManage?: boolean;
  isTitleAsLink?: boolean;
};

function StoryWrapper(props: Props) {
  const [{ by, score, time, title, url, id, kids, descendants }, setStory] =
    useState<Story>({});
  const [refreshComments, setRefreshComments] = useState(false);
  const { storyId, isComment, isManage, isTitleAsLink } = props;

  useEffect(() => {
    getStoryById(storyId)
      .then((data) => setStory(data))
      .catch((e) => console.error(e));
  }, [storyId, refreshComments]);

  const handlerRefreshComments = () => {
    setRefreshComments(!refreshComments);
  };

  return (
    <Card style={{ marginTop: '0.1rem' }}>
      <Card.Body>
        <Row>
          <Col>
            <Card.Subtitle className="mb-2 text-muted">{by!}</Card.Subtitle>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'right' }}>
            <Card.Subtitle style={{ fontSize: '0.9rem' }}>
              {time && new Date(time * 1000).toLocaleDateString('en-GB')}
            </Card.Subtitle>
          </Col>
        </Row>
        {isTitleAsLink ? (
          <Card.Link
            as={Link}
            to={`/story/${id!}`}
            style={{ textDecoration: 'none' }}
          >
            <Card.Title>{title}</Card.Title>
          </Card.Link>
        ) : (
          <Card.Title>{title}</Card.Title>
        )}

        {isManage && (
          <Row style={{ marginBottom: '0.5rem' }}>
            <Col>
              <Card.Link
                href={url}
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                Go to the source
              </Card.Link>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'right' }}>
              <Card.Link
                onClick={handlerRefreshComments}
                style={{ textDecoration: 'none', cursor: "pointer" }}
              >
                Update
              </Card.Link>
            </Col>
          </Row>
        )}

        <Row>
          <Col>
            <Card.Text>👍 {score!}</Card.Text>
          </Col>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'right',
            }}
          >
            <Card.Text>comments {descendants!}</Card.Text>
          </Col>
        </Row>
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
