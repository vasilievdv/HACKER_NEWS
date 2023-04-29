import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getCommentById } from '../../requests/get-comment-by-id';
import { Comment } from '../../components/CommentBox';

type Props = {
  commentId: number;
};
function CommentBox(props: Props) {
  const [{ text, kids, by }, setStory] = useState<Comment>({});

  const { commentId } = props;
  useEffect(() => {
    getCommentById(commentId)
      .then((data) => setStory(data))
      .catch((e) => console.error(e));
  }, [commentId]);

  return (
    <div>
      <Card>
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Subtitle className="mb-2 text-muted">
            {by}
          </Card.Subtitle>
          <Card.Text>{text}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
        {kids! &&
          kids.map((commentId) => (
            <CommentBox key={commentId} commentId={commentId} />
          ))}
      </Card>
    </div>
  );
}

export default CommentBox;
