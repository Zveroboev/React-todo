import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
  let total = props.todoList.length;
  let completed = props.todoList.filter(todo => todo.completed).length;
  let notCompleted = total - completed;

  return (
    <table className="stats">
      <tbody>
      <tr>
        <th>Всего задач</th>
        <td>{total}</td>
      </tr>
      <tr>
        <th>Выполнено</th>
        <td>{completed}</td>
      </tr>
      <tr>
        <th>Осталось</th>
        <td>{notCompleted}</td>
      </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired
};


export default Stats;