import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, task, setTask, editTask, setEditTask }) => {

    const updateTask = (title, id, completed) => {
        const newTask = task.map((task) =>
            task.id === id ? { title, id, completed } : task
        )
        setTask(newTask); setEditTask("");

    };
    useEffect(() => {
        if (editTask) {
            setInput(editTask.title);
        } else {
            setInput("");
        }
    }, [setInput, editTask]);
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTask) {
            setTask([...task, { id: uuidv4(), title: input, completed: false }]);
            setInput("");

        } else {
            updateTask(input, editTask.id, editTask.completed)
        }

    };
    return (
        <form OnSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a task.." className="task-input" value={input} required
                OnChange={onInputChange} />
            <button className="button-add" type="submit">
                {editTask ? "ok" : "ADD"}
            </button>
        </form>
    );
};

export default Form;
