import React from 'react';
import classes from './AnswersItem.module.css'
const AnswerItem = props => {
  const newClasses = [classes.AnswerItem];

  if (props.state) {
    newClasses.push(classes[props.state])
  }

  return (
    <li
      className={newClasses.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;