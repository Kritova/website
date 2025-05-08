import React, { useState } from 'react';

function MicroTask({ currentLesson, onMarkComplete }) {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [taskAttempted, setTaskAttempted] = useState(false);

  if (!currentLesson || !currentLesson.tasks || currentLesson.tasks.length === 0) {
    return null; // Or a message indicating no task for this lesson
  }

  const currentTask = currentLesson.tasks[0]; // For now, we're assuming only one task per lesson

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleOptionChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    setTaskAttempted(true);
    let correct = false;
    if (currentTask?.type === 'mcq') {
      correct = answer === currentTask.answer;
    } else if (currentTask?.type === 'fill-blank') {
      correct = answer.trim().toLowerCase() === currentTask.answer.trim().toLowerCase();
    } else if (currentTask?.type === 'code') {
      // Basic code comparison - you might need a more sophisticated solution later
      correct = answer.trim() === currentTask.solution.trim();
    }
    setIsCorrect(correct);
    if (correct) {
      onMarkComplete();
    }
  };

  return (
    <div className="micro-task">
      <h3>Micro-Task for "{currentLesson.title}"</h3>
      {currentTask?.type === 'mcq' && (
        <div>
          <p>{currentTask.question}</p>
          {currentTask.options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name={`mcq-${currentLesson.id}`}
                value={option}
                checked={answer === option}
                onChange={handleOptionChange}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}

{currentTask?.type === 'fill-blank' && (
  <div>
    <p>
      {currentTask.text.split('____')[0]}
      <input type="text" value={answer} onChange={handleInputChange} />
      {currentTask.text.split('____')[1]}
    </p>
  </div>
)}

      {currentTask?.type === 'code' && (
        <div>
          <p>{currentTask.instructions}</p>
          <textarea rows="4" cols="50" value={answer} onChange={handleInputChange} />
        </div>
      )}

      <button onClick={handleSubmit} disabled={taskAttempted && !isCorrect}>
        {taskAttempted && isCorrect ? 'Completed!' : 'Submit Answer'}
      </button>

      {taskAttempted && isCorrect && <p style={{ color: 'green' }}>Correct!</p>}
      {taskAttempted && isCorrect === false && <p style={{ color: 'red' }}>Incorrect. Try again.</p>}
    </div>
  );
}

export default MicroTask;