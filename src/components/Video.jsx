// App.js

import React from 'react';
import Video from './components/Video'; // Import the Video component

function App() {
  return (
    <div>
      <Video 
        videoSrc="https://www.youtube.com/watch?v=SG03JXX1t1I&list=LL&index=5" // Provide your video file source here
        videoTitle="My Cool Video" // Provide a title for the video
      />
    </div>
  );
}

export default App;
