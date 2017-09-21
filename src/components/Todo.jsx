import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

function Todo(props) {
  return (
    <div className="todo">
      <Checkbox checked={props.completed} />

      <span className="todo-title">{props.title}</span>

      <Button classname="delete icon" icon="delete"/>
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool
};

Todo.defaultProps = {
  completed: false
};

export default Todo;