import "./quizAttemptScreen.scss";

const Timer = ({ timeRemaining, currentQuestionIndex }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} min ${seconds} sec`;
  };

  return (
    <>
      <div className="timer">
        <span className="current-question timer-layout">
          {currentQuestionIndex + 1} / 05{" "}
        </span>
        <span className="time-remaining timer-layout">
          {" "}
          {formatTime(timeRemaining)}
        </span>
      </div>
    </>
  );
};

export default Timer;
