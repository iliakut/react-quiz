import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js';

class Quiz extends Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Choose the option',
        id: 1,
        rightAnswerId: 2,
        answers: [
          {text: 'Question 1', id: 1},
          {text: 'Question 2', id: 2},
          {text: 'Question 3', id: 3},
          {text: 'Question 4', id: 4},
        ]
      },
      {
        question: 'Choose another the option',
        id: 2,
        rightAnswerId: 1,
        answers: [
          {text: 'Question 1', id: 1},
          {text: 'Question 2', id: 2},
          {text: 'Question 3', id: 3},
          {text: 'Question 4', id: 4},
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {
    console.log(answerId);

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {

      this.setState({
        answerState: {[answerId]: 'success'},
      });

      setTimeout(() => {
        if (this.quizFinished()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState((state) => ({
            activeQuestion: state.activeQuestion + 1,
            answerState: null,
          }))
        }
      }, 1000);
    } else {

      this.setState({
        answerState: {[answerId]: 'error'},
      });
    }
  };

  quizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }


  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          {
            this.state.isFinished
              ? <h1>Finished</h1>
              : <ActiveQuiz
                  answers={this.state.quiz[this.state.activeQuestion].answers}
                  question={this.state.quiz[this.state.activeQuestion].question}
                  onAnswerClick={this.onAnswerClickHandler}
                  quizLength={this.state.quiz.length}
                  answerNumber={this.state.activeQuestion + 1}
                  state={this.state.answerState}
                />
          }
        </div>
      </div>
    )
  }
}

export default Quiz;
