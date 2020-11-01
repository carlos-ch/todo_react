import React from 'react';
import './styles/Todo.css';

// prettier-ignore
const Todo = ({
  id, todo, checkHandler, deleteHandler,
}) => (
  <article id={id} className={`todo-wrapper ${todo.done ? 'done' : ''}`}>
    <input className="checkbox" onClick={checkHandler} type="checkbox" name="done"/>
    <button
      onClick={deleteHandler}
      className={`btn todo--btn__delete ${todo.done ? 'hide' : ''}`}
    >
      Remove
    </button>
    <p className="todo-item--p">{todo.description}
    </p>
  </article>
);

export default Todo;
