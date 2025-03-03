import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, removeTask }) {
    return (
        <div>
            {tasks.length === 0 ? <p>Užduočių nėra.</p> : tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    removeTask={removeTask}
                />
            ))}
        </div>
    );
}

export default TaskList;
