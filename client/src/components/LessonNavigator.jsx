import React from 'react';
import '../pages/CourseModule.css'; // Make sure the path is correct

function LessonNavigator({ lessons, currentLessonId, onLessonClick }) {
  return (
    <aside className="lesson-navigator">
      <h2>Lessons</h2>
      <ul>
        {lessons.map((lesson, index) => (
          <li
            key={lesson.id}
            onClick={() => onLessonClick(lesson.id)}
            className={`${lesson.id === currentLessonId ? 'active' : ''} ${index > lessons.findIndex(l => l.id === currentLessonId) && !lessons[index - 1]?.completed ? 'locked' : ''}`}
          >
            {lesson.title} {lesson.completed && '✔️'}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default LessonNavigator;