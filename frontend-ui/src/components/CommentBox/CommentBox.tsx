import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { getCommentById } from '../../requests/get-comment-by-id';
import { Comment } from '../../components/CommentBox';

type Props = {
  commentId: number;
};
function CommentBox(props: Props) {
  const [isShow, setIsShow] = useState(false);
  const [{ text, kids, by, time }, setStory] = useState<Comment>({});

  const { commentId } = props;
  useEffect(() => {
    getCommentById(commentId)
      .then((data) => setStory(data))
      .catch((e) => console.error(e));
  }, [commentId]);

  const handlerShowNestedComments = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <Card style={{ margin: '0.1rem' }}>
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
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

          <Button
            variant="light"
            disabled={!kids}
            onClick={handlerShowNestedComments}
          >
            <Card.Text>{text}</Card.Text>
          </Button>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
        {isShow &&
          kids! &&
          kids.map((commentId) => (
            <CommentBox key={commentId} commentId={commentId} />
          ))}
      </Card>
    </div>
  );
}

export default CommentBox;
