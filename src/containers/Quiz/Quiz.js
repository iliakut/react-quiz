import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz.js';

class Quiz extends Component {
  state = {
    results: {
    },
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
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results,
      });

      setTimeout(() => {
        if (this.isQuizFinished()) {
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
      results[question.id] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results,
      });
    }
  };

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    })
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  componentWillMount() {
  }


  render() {
    console.log('Quiz ID ', this.props.match.params.id);

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          {
            this.state.isFinished
              ? <FinishedQuiz
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry={this.retryHandler}
                />
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
