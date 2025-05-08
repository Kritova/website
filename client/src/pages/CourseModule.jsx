import React, { useState ,useEffect} from 'react';
import './CourseModule.css';
import LessonNavigator from '../components/LessonNavigator';
import LessonViewer from '../components/LessonViewer';
import MicroTask from '../components/MicroTask';

const initialLessons = [
  {
    id: 1,
    title: 'Lesson 1: Intro to AI',
    completed: false,
    videoUrl: 'YOUR_DUMMY_VIDEO_URL_1',
    description: 'An introduction to the fascinating world of Artificial Intelligence.',
    tasks: [
      {
        type: 'mcq',
        question: 'What does AI stand for?',
        options: ['Artificial Intelligence', 'Automated Insight', 'Advanced Interface'],
        answer: 'Artificial Intelligence',
      },
    ],
  },
  {
    id: 2,
    title: 'Lesson 2: What is ML?',
    completed: false,
    videoUrl: 'YOUR_DUMMY_VIDEO_URL_2',
    description: 'Exploring the core concepts of Machine Learning.',
    tasks: [
      {
        type: 'fill-blank',
        text: 'Machine learning algorithms learn from ____.',
        answer: 'data',
      },
    ],
  },
  {
    id: 3,
    title: 'Lesson 3: Types of ML',
    completed: false,
    videoUrl: 'YOUR_DUMMY_VIDEO_URL_3',
    description: 'Delving into the different categories of Machine Learning algorithms.',
    tasks: [
      {
        type: 'code',
        instructions: 'Write a simple Javascript function that adds two numbers.',
        solution: 'function add(a, b) {\n  return a + b;\n}',
      },
    ],
  },
  {
    id: 4,
    title: 'Lesson 4: Neural Networks',
    completed: false,
    videoUrl: 'YOUR_DUMMY_VIDEO_URL_4',
    description: 'Understanding the basics of Neural Networks.',
    tasks: [
      {
        type: 'mcq',
        question: 'What is the basic unit of a neural network?',
        options: ['Neuron', 'Synapse', 'Dendrite'],
        answer: 'Neuron',
      },
    ],
  },
  // Add more lessons with their respective tasks
];

function CourseModule() {
  const [lessons, setLessons] = useState(initialLessons);
  const [currentLessonId, setCurrentLessonId] = useState(lessons[0].id);
  const currentLessonIndex = lessons.findIndex(lesson => lesson.id === currentLessonId);
  const currentLesson = lessons[currentLessonIndex];

  const handleLessonClick = (id) => {
    const clickedLessonIndex = lessons.findIndex(lesson => lesson.id === id);
    console.log('Clicked lesson ID:', id, 'Clicked index:', clickedLessonIndex, 'Current index:', currentLessonIndex, 'Clicked lesson completed:', lessons[clickedLessonIndex]?.completed);

    // Only allow clicking on the current lesson or completed lessons
    if (clickedLessonIndex <= currentLessonIndex || lessons[clickedLessonIndex]?.completed) {
      setCurrentLessonId(id);
    }
  };
  //console.log('handleMarkComplete called for lesson:', currentLesson.id)
  const handleMarkComplete = () => {
    // Update the completed status of the current lesson
    const updatedLessons = lessons.map(lesson =>
      lesson.id === currentLessonId ? { ...lesson, completed: true } : lesson ,
    );
    console.log('lessons state after marking complete:', updatedLessons);

    setLessons(updatedLessons);

    // Unlock the next lesson if it exists
    if (currentLessonIndex < lessons.length - 1) {
      // For now, we're not explicitly unlocking, just allowing navigation
      // The handleLessonClick will control which lessons are clickable
      setCurrentLessonId(lessons[currentLessonIndex + 1].id); // Update to the next lesson's ID

    }
  };

  return (
    <div className="course-module-container">
      <LessonNavigator
        lessons={lessons}
        currentLessonId={currentLessonId}
        onLessonClick={handleLessonClick}
      />
      <main className="lesson-content">
        <LessonViewer currentLesson={currentLesson} />
        <MicroTask key={currentLesson ? currentLesson.id : 'no-lesson'}
        currentLesson={currentLesson} 
        onMarkComplete={handleMarkComplete} />
      </main>
    </div>
  );
}

export default CourseModule;