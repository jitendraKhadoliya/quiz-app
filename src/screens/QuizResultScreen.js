import React from "react";

const QuizResultScreen = ({ score, timeTaken }) => {
  const convertSecondsToMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes} minutes ${remainingSeconds} seconds`;
  };
  const timeInMinutes = convertSecondsToMinutes(timeTaken);

  return (
    <div>
      <h1>Quiz Result</h1>
      <p>Score: {score}%</p>
      <p>Time Taken: {timeInMinutes} seconds</p>
    </div>
  );
};

export default QuizResultScreen;
