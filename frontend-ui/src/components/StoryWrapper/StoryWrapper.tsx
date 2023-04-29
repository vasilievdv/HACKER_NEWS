import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getStoryById } from '../../requests';
import { Story } from './types';
import { Link } from 'react-router-dom';

type Props = {
  storyId: number;
};

function StoryWrapper(props: Props) {
  const [{by, score, time, title, url, id}, setStory] = useState<Story>({});

  useEffect(() => {
    getStoryById(props.storyId)
      .then((data) => setStory(data))
      .catch((e) => console.error(e));
  }, [props.storyId]);

  return (
    <Card style={{ width: '75%' }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{by}</Card.Subtitle>
        <Card.Link as={Link} to={`/story/${id!}`}>
          <Card.Title>{title}</Card.Title>
        </Card.Link>
        <Card.Text>
          {new Date(time! * 1000).toLocaleDateString('en-GB')}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StoryWrapper;
