import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const getFromLocalStorage = () => {
    if (!localStorage.getItem('localTodos')) {
      localStorage.setItem('localTodos', '[]');
    } else {
      const fromLocalStorage = JSON.parse(localStorage.getItem('localTodos'));
      setTodos(fromLocalStorage);
    }
  };

  const setToLocalStorage = () => {
    localStorage.setItem('localTodos', JSON.stringify(todos));
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    setToLocalStorage();
  }, [todos]);
  return (
    <div className="app-wrapper">
      <header className="header--title">
        <h1>to_do</h1>
        <aside>manager</aside>
      </header>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
