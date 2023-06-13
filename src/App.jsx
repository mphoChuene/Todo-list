import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h2>To-do List</h2>
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <></>;
        })}
      </div>
      {newTask}
    </div>
  );
}

export default App;
