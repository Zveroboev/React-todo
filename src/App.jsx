import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Todo from  './components/Todo';

const App = () => {
  return (
    <main>
      <Header title='React Todo'/>
      <section className="todo-list">
        <Todo title={'Изучить JavaScript'} completed={true}/>
        <Todo title={'Изучить ES2015'} completed={false}/>
        <Todo title={'Изучить React'} completed={false}/>
      </section>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
