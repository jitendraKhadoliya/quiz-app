import React, { useState } from "react";
import "./quizHero.scss";
import { BsArrowLeft, BsQuestionCircle } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiFillStar,
  AiOutlineFileText,
  AiOutlineClockCircle,
  AiOutlineQuestionCircle,
  AiOutlineExclamation,
} from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { FaRegCommentDots, FaRegClone } from "react-icons/fa";
import { VscSaveAs } from "react-icons/vsc";
import { GiAchievement, GiCrossedSwords } from "react-icons/gi";
import heroImage from "../assets/hero-image.png";
import { useNavigate } from "react-router-dom";

const QuizHero = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  let navigate = useNavigate();

  const handleQuizStart = () => {
    navigate("/quiz-started");
  };
  return (
    <div className="hero-section">
      <div className="hero-subSection">
        <div className="nav-bar">
          <div className="left-side">
            <BsArrowLeft size={30} />
          </div>
          <div className="right-side">
            <AiOutlineSearch size={30} />
            <RxAvatar size={30} />
          </div>
        </div>

        <div className="hero-img">
          <div className="left-side">
            The <span className="green-text">Daily</span> MS
            <span className="green-text"> Excel</span>
            Quiz
          </div>
          <div className="right-side">
            <img src={heroImage} alt="hero-img" />
          </div>
        </div>

        <h3>The Daily MS Excel Quiz</h3>

        <div className="hero-desc">
          <div className="left-desc">
            <span className="desc-icon">
              <FaRegCommentDots /> Leave a comment
            </span>
            <span className="desc-icon">
              <VscSaveAs /> save Quiz
            </span>
            <span className="desc-icon">
              <GiCrossedSwords /> challenge a Friend
            </span>
          </div>
          <div className="right-desc">
            <span className="desc-icon">100+ people enrolled</span>
            <span className="desc-icon">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <span> 3 Rating (5.0) </span>
          </div>
        </div>
        <div className="text-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          voluptatibus quaerat sapiente mollitia quia libero itaque delectus
          asperiores quasi odit sed, unde incidunt accusamus ad optio nostrum...
          <span className="green-text">Read More</span>
          <div className="bottom-desc">
            <h6>This Quiz Includes</h6>
            <div className="">
              <span className="desc-icon">
                <AiOutlineFileText /> 50% passing marks
              </span>
              <span className="desc-icon">
                <BsQuestionCircle /> 5 Questions
              </span>
              <span className="desc-icon">
                <AiOutlineClockCircle /> 10 Mins
              </span>
              <span className="desc-icon">
                <FaRegClone /> 1 Attempt Daily
              </span>
            </div>
          </div>
          <div className="btn">
            <button onClick={() => toggleTab(1)}>Take Quiz</button>
          </div>
          {
            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <div className="close-btn">
                  <AiOutlineClose onClick={() => toggleTab(0)} />
                </div>

                <h4 className="services__modal-title">Quiz rule </h4>
                <div className="services__modal-description">
                  <div>
                    <AiOutlineClockCircle />
                  </div>
                  <div className="services__modal-sub-description">
                    <span>10 Mins </span>
                    <span> keep In mind that its time bound quiz</span>
                  </div>
                </div>
                <div className="services__modal-description">
                  <div>
                    <AiOutlineQuestionCircle />
                  </div>
                  <div className="services__modal-sub-description">
                    <span>5 Questions </span>
                    <span> We believe that you will ace it </span>
                  </div>
                </div>
                <div className="services__modal-description">
                  <div>
                    <GiAchievement />
                  </div>
                  <div className="services__modal-sub-description">
                    <span>50% passing </span>
                    <span> all the best! see you on other side</span>
                  </div>
                </div>
                <div className="services__modal-sign">
                  <AiOutlineExclamation /> this quiz can be attempered ones in
                  daily
                </div>

                <div className="btn">
                  <button onClick={handleQuizStart}>Start</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default QuizHero;
