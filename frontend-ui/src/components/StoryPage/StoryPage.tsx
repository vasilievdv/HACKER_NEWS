import React from 'react';
import { useParams } from 'react-router-dom';

function StoryPage() {
  const { storyId } = useParams<{ storyId: string }>();

  return <div></div>;
}

export default StoryPage;
