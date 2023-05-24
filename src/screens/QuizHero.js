import React from "react";
import "./quizHero.scss";
import { BsArrowLeft, BsQuestionCircle } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiFillStar,
  AiOutlineFileText,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { FaRegCommentDots, FaRegClone } from "react-icons/fa";
import { VscSaveAs } from "react-icons/vsc";
import { GiCrossedSwords } from "react-icons/gi";
import heroImage from "../assets/hero-image.png";

const QuizHero = () => {
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
            <button>Take Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHero;
