import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let title = this.state.title;

    if (title) {
      this.props.onAdd(title);
      this.setState({title: ''});
    }
  }

  handleChange(evt) {
    let title = evt.target.value === ' ' ? '' : evt.target.value;

    this.setState({title});
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Что нужно сделать?"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Button type="submit">Добавить</Button>
      </form>
    );
  }
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default Form;