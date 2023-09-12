import React from 'react';

const Tasklist = ({ task, setTask, setEditTask }) => {
    const handleComplete = (task) => {
        setTask(
            task.map((item) => {
                if (item.id === task.id) {
                    return { ...item, completed: !item.completed }
                }
                return item

            })
        )

    }
    const handleEdit = ({ id }) => {
        const findTask = task.find((task) => task.id === id);
        setEditTask(findTask)
    }
    const handleDelete = ({ id }) => {
        setTask(task.filter((task) => task.id !== id));
    };



    return (
        <div>
            {

                task.map((task) => (
                    <li className="task-list" key={task.id}>
                        <input
                            type="text"
                            value={task.title}
                            className={"list $ {task.completed ? }"}
                            OnChange={(event) => event.preventDefault()}
                        />
                        <div>
                            <button className="button-complete task-button" onClick={() => handleComplete(task)}>
                                <i className="fa fa-check-circle"></i>

                            </button>
                            <button className="button-edit task-button" onClick={() => handleEdit(task)}>
                                <i className="fa fa-check-edit"></i>

                            </button>
                            <button className="button-delete task-button" onClick={() => handleDelete(task)}>
                                <i className="fa fa-check-trash"></i>

                            </button>

                        </div>

                    </li>

                )

                )}

        </div>
    );
};

export default Tasklist;
