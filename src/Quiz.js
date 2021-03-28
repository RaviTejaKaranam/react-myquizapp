import React from "react";
import Question from './Question';
import Result from './Result';
class Quiz extends React.Component {
  state = {
    //All the questions and answers along with correct answer
    quizData: [
      {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
      },
      {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
      },
      {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
      },
      {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
      },
      {
        question: "What is the result of the following expression '2' == 2",
        a: "True",
        b: "False",
        c: "undefined",
        d: "none of the above",
        correct: "a"
      },
      {
        question : "Which tag is used to add Hyperlinks to the web page in HTML",
        a : "<link></link>",
        b : "<hyperlink></hyperlink>",
        c : "<a></a>",
        d : "<anchor></anchor>",
        correct : "c"
      },
      {
        question : "ES6 is also known as",
        a : "ES2015",
        b : "ES2016",
        c : "ES2017",
        d : "ES2018",
        correct : "a"
      },
      {
        question : "SQL stands for",
        a : "Standard Query Language",
        b : "Structured Query Language",
        c : "Statistical Query Language",
        d : "Structured Query License",
        correct : "b"
      },
      {
        question : "Which tag is used to identify the keywords describing the site",
        a : "comment Tag",
        b : "keyword Tag",
        c : "meta tag",
        d : "anchor tag",
        correct : "c"
      },
      {
        question : "What tag is used to display image in HTML page",
        a : "picture",
        b : "image",
        c : "src",
        d : "img",
        correct : "d" 
      }
    ],
    currentQuestion : 0, // the current question to be displayed
    currentScore : 0, // Questions answered correctly so far
    timeRemaining : 60 // Total time given to attempt all the questions
  };
  handleSubmit = (selectedAnswer, timeReceived) => {
    //If the correct answer is submitted increase current score by one
    if(selectedAnswer === this.state.quizData[this.state.currentQuestion].correct){
      this.setState({currentScore : this.state.currentScore + 1})
    }
    // Go to the next question and set the time remaining
    this.setState({currentQuestion : this.state.currentQuestion + 1})
    this.setState({timeRemaining : timeReceived})
  }

  handleTimer = (timeReceived) => {
    //Handle the timer
    this.setState({timeRemaining : timeReceived})
  }

  retakeQuizHandler = () => {
    //Retake the Quiz
    location.reload()
  }
  
  render(){
    // If questions and time is still left, display the question 
    // Else display the results
    //Passing the question, options and time remaining etc as props
    return (
      <div>
      {this.state.currentQuestion < this.state.quizData.length && this.state.timeRemaining > 0 ? 
        <Question currentQuestion = {this.state.quizData[this.state.currentQuestion].question} optionA = {this.state.quizData[this.state.currentQuestion].a} optionB = {this.state.quizData[this.state.currentQuestion].b} optionC = {this.state.quizData[this.state.currentQuestion].c} optionD = {this.state.quizData[this.state.currentQuestion].d} timeRemaining = {this.state.timeRemaining} handleSubmit = {this.handleSubmit} handleTimer = {this.handleTimer}/> : <Result questionsAnswered = {this.state.currentScore} totalQuestions = {this.state.quizData.length} retakeQuizHandler = {this.retakeQuizHandler}/>}
      </div>
    )
  }
}

export default Quiz;