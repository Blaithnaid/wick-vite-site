// App.js

import React from 'react';
import Video from './components/Video'; // Import the Video component

function App() {
  return (
    <div>
      <Video 
        videoSrc="https://www.example.com/path-to-video.mp4" // Provide your video file source here
        videoTitle="My Cool Video" // Provide a title for the video
      />
    </div>
  );
}

export default App;
