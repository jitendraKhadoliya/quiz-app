// screens/QuizDetail.js

import React, { useState } from "react";
import QuizDetailScreen from "../components/QuizDetailScreen";
import QuizAttemptScreen from "../components/QuizAttemptScreen";
import QuizResultScreen from "./QuizResultScreen";
// import QuizResultScreen from "./QuizResultScreen";
import quizData from "../data/quizData";

const QuizDetail = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizSubmit = (userAnswers, timer) => {
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        correctAnswers++;
        console.log(correctAnswers);
      }
    });

    const totalQuestions = quizData.length;
    const calculatedScore = (correctAnswers / totalQuestions) * 100;
    const calculatedTimeTaken = 600 - timer;

    setScore(calculatedScore);
    setTimeTaken(calculatedTimeTaken);
    setQuizCompleted(true);
  };

  return (
    <div>
      {!quizStarted && <QuizDetailScreen onStartQuiz={handleStartQuiz} />}
      {quizStarted && !quizCompleted && (
        <QuizAttemptScreen
          questions={quizData}
          onQuizSubmit={handleQuizSubmit}
        />
      )}
      {quizCompleted && (
        <QuizResultScreen score={score} timeTaken={timeTaken} />
      )}
    </div>
  );
};

export default QuizDetail;
