import React from 'react';
import Todo from './Todo';
import './styles/TodoList.css';

const TodoList = ({ todos, setTodos }) => {
  const getFromState = (id, arr) => arr.filter(todo => todo.id === id)[0];

  const deleteHandler = e => {
    const todoInState = getFromState(e.target.parentElement.id, todos);
    setTodos(todos.filter(item => item !== todoInState));
  };

  const toggleStatus = todo => {
    if (todo.done) {
      return { ...todo, done: false };
    }
    return { ...todo, done: true };
  };

  const checkHandler = e => {
    const checkedTodos = todos.map(todo => {
      if (todo.id === e.target.closest('article').id) {
        return toggleStatus(todo);
      }
      return todo;
    });
    setTodos(checkedTodos);
  };
  return (
    <div className="todos-wrapper">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
