import React from 'react';
import './Question.css'
const Result = (props) => {
  //Display results questions Answered / Total questions
  return(
    <div className = "quiz-container" id = "quiz">
      <h2 className = "results">You scored {props.questionsAnswered} out of {props.totalQuestions} </h2>
      <button onClick = {props.retakeQuizHandler}>Retake Quiz </button>
    </div>
  )
}

export default Result