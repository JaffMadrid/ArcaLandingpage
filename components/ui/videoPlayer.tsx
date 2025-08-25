import React from 'react';

export default function VideoPlayer({
  src = '/assets/videos/DejatuHuella.mp4', 
  className = '',
  muted = true,
  loop = true,
  autoPlay = true,
  playsInline = true,
  showControls = true,
}) {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <video
        className="w-full h-full object-cover pointer-events-auto"
        src={src}
        muted={muted}
        loop={loop}
        autoPlay={autoPlay}
        playsInline={playsInline}
        controls={showControls}
        aria-hidden={!showControls}
      />
    </div>
  );
}