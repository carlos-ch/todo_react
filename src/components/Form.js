import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/Form.css';

const Form = ({ todos, setTodos }) => {
  const submitHandler = e => {
    e.preventDefault();
    const input = e.target.querySelector('.todo-input');
    const newTodo = {
      id: uuidv4(),
      description: input.value,
      done: false,
    };
    setTodos([...todos, newTodo]);
    input.value = '';
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="new-input" className="label">
          Write your to-do here
        </label>
        <input
          type="text"
          className="todo-input"
          placeholder="I need to..."
          required
        />
        <button className="btn btn--submit" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
