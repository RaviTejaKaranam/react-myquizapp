import React from "react";
import "./Question.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Setting the timer, current selected answer and setting all options initially to false
      timeRemaining: this.props.timeRemaining,
      selectedAnswer: null,
      radioButton1: false,
      radioButton2: false,
      radioButton3: false,
      radioButton4: false
    };
  }
  // Timer function reduce time by one second for every second
  startTimer = () => {
    let interval = setInterval(() => {
      this.setState({ timeRemaining: this.state.timeRemaining - 1 });
      if (this.state.timeRemaining < 1) {
        this.props.handleTimer(this.state.timeRemaining);
        clearInterval(interval);
      }
    }, 1000);
  };
  // Submission Handler
  handleSubmit = () => {
    // Error Handler
    if (this.state.selectedAnswer === null) {
      alert("Please Select an option");
    } 
    // Passing the selected answer and time remaining to the parent component and setting the state back to default values
    else {
      this.props.handleSubmit(
        this.state.selectedAnswer,
        this.state.timeRemaining
      );
      this.setState({
        radioButton1: false,
        radioButton2: false,
        radioButton3: false,
        radioButton4: false,
        selectedAnswer : null
      });
    }
  };
  // Call the timer when component is mounted
  componentDidMount() {
    this.startTimer();
  }

  render() {
    //Display the question, options and a submit button
    //Add event listeners to each radio button and submit button
    return (
      <div className="quiz-container" id="quiz">
        <div className="quiz-header">
          <div className="timer" id="timer">
            Time Left : {this.state.timeRemaining} Seconds
          </div>
          <h2 id="question">{this.props.currentQuestion}</h2>
          <ul>
            <li>
              <input
                type="radio"
                name="answer"
                id="a"
                className="answer"
                checked={this.state.radioButton1}
                onChange={e => {
                  this.setState({ radioButton1: true, selectedAnswer: "a" });
                }}
              />
              <label htmlFor="a" id="a_text">
                {this.props.optionA}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="b"
                className="answer"
                checked={this.state.radioButton2}
                onChange={e => {
                  this.setState({ radioButton2: true, selectedAnswer: "b" });
                }}
              />
              <label htmlFor="b" id="b_text">
                {this.props.optionB}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="c"
                className="answer"
                checked={this.state.radioButton3}
                onChange={e => {
                  this.setState({ radioButton3: true, selectedAnswer: "c" });
                }}
              />
              <label htmlFor="c" id="c_text">
                {this.props.optionC}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="d"
                className="answer"
                checked={this.state.radioButton4}
                onChange={e => {
                  this.setState({ radioButton4: true, selectedAnswer: "d" });
                }}
              />
              <label htmlFor="d" id="d_text">
                {this.props.optionD}
              </label>
            </li>
          </ul>
        </div>
        <button id="submit" className="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Question;
