// components/QuizDetailScreen.js

import React from "react";

const QuizDetailScreen = ({ onStartQuiz }) => {
  return (
    <div>
      <h1>Quiz Detail Screen</h1>
      <p>Welcome to the Quiz! Get ready to test your knowledge.</p>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default QuizDetailScreen;
