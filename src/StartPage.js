import React from "react";
import "./StartPage.css";
//Landing page with Instructions and start quiz button
const StartPage = props => {
  const handleClick = () => {
    props.onStartQuiz();
  };

  return (
    <header className="start-page" id="start-page">
      <div className="main-heading">
        <h1>QUIZ APP</h1>
      </div>
      <div className="sub-heading">
        <h2>
          Test Your Knowledge <i className="fas fa-award" />
        </h2>
      </div>
      <div className="instructions-container">
        <div className="instructions-heading">Instructions</div>
        <div className="instructions">
          <ul>
            <li>This is a quiz on basic concepts of Web Development.</li>
            <li>Duration : 60 seconds.</li>
            <li>Number of Questions : 10.</li>
            <li>Each question has 4 options out which only one is correct.</li>
            <li>
              Each right answer carries one mark and there is no negative
              marking.
            </li>
            <li>Total marks will be displayed at the end of the quiz.</li>
          </ul>
          <em>All the best !!!</em>
        </div>
      </div>
      <button className="start-quiz" id="start-quiz" onClick={handleClick}>
        Start Quiz
      </button>
    </header>
  );
};
export default StartPage;
