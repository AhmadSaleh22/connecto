import React, { useState } from 'react';

import ProgressBar from './ProgressBar';


const Tracker = () => {
  const [progress, setProgress] = useState(11);
  const [color, setColor] = useState('#29E881');
  const colorArray = ['#7ea9e1', "#ed004f", "#00fcf0", "#d2fc00", "#7bff00", "#fa6900"];

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  const randomProgressValue = () => {
    const progressValue = Math.floor(Math.random() * 101);
    setProgress(progressValue);
    const randomProgressColor = randomColor();
    setColor(randomProgressColor);
  }

  
  return (
      <div>
        <ProgressBar 
          progress={progress}
          size={74}
          strokeWidth={8}
          circleOneStroke='#d9edfe'
          circleTwoStroke={color}
          onClick={randomProgressValue}
        />
      </div>
  );
}

export default Tracker;