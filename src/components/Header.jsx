import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';

function Header(props) {
  return (
    <header>
      <Stats todoList={props.todoList}/>
      <h1>{props.title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired
};

Header.defaultProps = {
  title: 'React Todo'
};

export default Header;