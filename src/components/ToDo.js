import React from 'react';
import { FaTrash } from "react-icons/fa";

const ToDo = ({ task, deleteTodo }) => {
  return (
    <div className="Todo">
      <p>{task.task}</p>
      <div>
        <FaTrash onClick={() => deleteTodo(task.id)} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default ToDo;
