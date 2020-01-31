import React, {Component} from 'react';
import classes from './QuizList.module.css'
import {NavLink} from 'react-router-dom';

class QuizList extends Component {

  renderQuizer() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li
          key={index}
        >
          <NavLink to={'/quiz/' + quiz}>
            Quiz {quiz}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List</h1>
          <ul>
            {this.renderQuizer()}
          </ul>
        </div>
      </div>
    );
  }
}

export default QuizList;