import React, { useState } from 'react';
import imageSrc from './image.jpg'; // replace with your own image path
import soundSrc from './sound.mp3'; // replace with your own sound path

function ImageWithSound() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    setIsPlaying(true);
    const audio = new Audio(soundSrc);
    audio.play();
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {isPlaying && (
        <img src={imageSrc} alt="My Image" />
      )}
    </div>
  );
}

export default ImageWithSound;
