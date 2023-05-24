import React from "react";

const Question = ({
  currentQuestionIndex,
  currentQuestion,
  selectedOptions,
  handleOptionSelect,
}) => {
  return (
    <>
      <h3>Question {currentQuestionIndex + 1}</h3>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOptions[currentQuestionIndex] === option}
                onChange={() => handleOptionSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Question;
