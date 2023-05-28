// components/QuizAttemptScreen.js

import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Question from "./Question";
import "./quizAttemptScreen.scss";

const QuizAttemptScreen = ({ questions, onQuizSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(600);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => timer;
    } else {
      onQuizSubmit(selectedOptions);
    }
  }, [timeRemaining, onQuizSubmit, selectedOptions]);

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedSelectedOptions = [...prevSelectedOptions];
      updatedSelectedOptions[currentQuestionIndex] = option;
      return updatedSelectedOptions;
    });
  };

  const handleNextQuestion = () => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedSelectedOptions = [...prevSelectedOptions];
      updatedSelectedOptions[currentQuestionIndex] =
        selectedOptions[currentQuestionIndex];
      return updatedSelectedOptions;
    });

    if (currentQuestionIndex === questions.length - 1) {
      onQuizSubmit(selectedOptions, timeRemaining);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="attempt-section">
      <div className="attempt-subSection">
        <Timer
          timeRemaining={timeRemaining}
          currentQuestionIndex={currentQuestionIndex}
        />

        <Question
          currentQuestionIndex={currentQuestionIndex}
          currentQuestion={currentQuestion}
          selectedOptions={selectedOptions}
          handleOptionSelect={handleOptionSelect}
        />
        <button
          disabled={!selectedOptions[currentQuestionIndex]}
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default QuizAttemptScreen;
