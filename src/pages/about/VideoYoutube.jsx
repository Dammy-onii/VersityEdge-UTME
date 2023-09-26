import React, { useState } from 'react';
import YouTube from 'react-youtube';

import "./videoYoutube.css"

function VideoYoutube() {

    const [videoId, setVideoId] = useState('l5dWVKiKRSs');

  const videoOptions = {
    playerVars: {
      // Add any desired player parameters here (e.g., autoplay, controls, etc.)
    },
  };

  const videoList = [
    'l5dWVKiKRSs',
    'sO4te2QNsHY',
    'DNZ5mPGW93Q',
  ];

  const handleVideoClick = (newVideoId) => {
    setVideoId(newVideoId);
  };


  return (
    <div>
        <div className="video-container">
        <YouTube videoId={videoId} opts={videoOptions} id='video'/>
      </div>
      <div className="video-thumbnails">
        {videoList.map((id) => (
          <div key={id} className="thumbnail" onClick={() => handleVideoClick(id)}>
            <img
              src={`https://img.youtube.com/vi/${id}/0.jpg`}
              alt={`Video Thumbnail ${id}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoYoutube