import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import todoList from './todo-list';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: this.props.initialData
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleStatusChange(id) {
    let todoList = this.state.todoList.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    this.setState({todoList});
  }

  handleDelete(id) {
    let todoList = this.state.todoList.filter(todo => todo.id !== id);

    this.setState({todoList});
  }

  render() {
    return (
      <main>
        <Header title={this.props.title}/>
        <section className="todo-list">
          {
            this.state.todoList.map(todo =>
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onStatusChange={this.handleStatusChange}
                onDelete={this.handleDelete}
              />
            )
          }
        </section>
      </main>
    );
  }
}


App.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired
};

ReactDOM.render(<App initialData={todoList}/>, document.getElementById('root'));
