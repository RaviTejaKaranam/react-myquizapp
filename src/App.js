import React from "react";
import "./style.css";
import StartPage from './StartPage';
import Quiz from './Quiz';

export default class App extends React.Component {
  // Displaying Landing Page or Quiz depending on the condition
  state = {
    showInstructions : true,
    showQuiz : false
  }
  handleChange = () =>{
    this.setState({showInstructions : false, showQuiz : true})
  }
  render(){
    return (
        <div>
          {this.state.showInstructions ? <StartPage displayInst = {this.state.showInstructions} onStartQuiz = {this.handleChange}/> : <Quiz />}
        </div>
      );
  }
  
}
