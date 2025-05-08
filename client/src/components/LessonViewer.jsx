import React from 'react';

function LessonViewer({ currentLesson }) {
  if (!currentLesson) {
    return <div>Please select a lesson to view.</div>;
  }

  return (
    <>
      <h1>{currentLesson.title}</h1>
      <p>{currentLesson.description}</p>
      <div className="video-player">
        <iframe
          width="560"
          height="315"
          src={currentLesson.videoUrl}
          title="Lesson Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default LessonViewer;