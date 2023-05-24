const Timer = ({ timeRemaining }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} min ${seconds} sec`;
  };

  return <p>Time Remaining: {formatTime(timeRemaining)}</p>;
};

export default Timer;
