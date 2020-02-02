import React, {Component} from 'react';
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button.js';
class QuizCreator extends Component {

  state = {
    quiz: [],
    formControls: {
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    }
  };

  submitHandler = event => {
    event.preventDefault()
  };

  addQuestionHandler = () => {

  };

  createQuizHandler = () => {

  };

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz Creator</h1>

          <form onSubmit={this.submitHandler}>

            <input/>

            <hr/>
            <input/>
            <input/>
            <input/>
            <input/>

            <select></select>

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Add question
            </Button>

            <Button
              type="success"
              onClick={this.createQuizHandler}
            >
              Create quiz
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;