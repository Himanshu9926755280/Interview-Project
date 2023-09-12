import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Form from "./component/Form";
import Tasklist from "./component/Tasklist";
import "./App.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("task")) || [];

  const [input, setInput] = useState("");
  const [task, setTask] = useState(initialState);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  return (
    <div className="container">
      <div claaName="app-wrapper">
        <div>
          <Header />

        </div>
        <div>
          <Form


            input={input}
            setInput={setInput}
            task={task}
            setTask={setTask}
            editTask={editTask}
            setEditTask={setEditTask}
          />

        </div>
        <div>
          <Tasklist task={task} setTask={setTask} setEditTask={setEditTask} />
        </div>

      </div>
    </div>);

}

export default App;
