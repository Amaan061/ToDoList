import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from "uuid";
import ToDo from './ToDo';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo }, 
    ]);
  };
  

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
       <h1>Get Things Done !</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <ToDo key={index} task={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoWrapper;
