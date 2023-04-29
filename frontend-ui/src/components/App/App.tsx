import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage';
import StoryPage from '../StoryPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/story/:storyId" element={<StoryPage />} />
      </Routes>
    </>
  );
}

export default App;
