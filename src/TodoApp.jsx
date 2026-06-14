import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addtask() {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  }

  function deleteTask(indexToDelete) {
    setTodos(todos.filter((todo, index) => index !== indexToDelete));
  }

  return (
    <div>
      <h1>Todo App</h1>
      <h3>Total Task: {todos.length}</h3>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addtask}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
}

export default TodoApp;
