import React from "react";

const Question = ({
  currentQuestionIndex,
  currentQuestion,
  selectedOptions,
  handleOptionSelect,
}) => {
  return (
    <>
      {/* <h3> {currentQuestionIndex + 1}/05</h3> */}
      <div className="current-questionSection">
        <div className="current-question">
          <p>{currentQuestion.question}</p>
        </div>
        <div className="current-questionOptions">
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <label className="label">
                  {option}
                  <input
                    type="radio"
                    value={option}
                    className="input"
                    checked={selectedOptions[currentQuestionIndex] === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Question;
