function TaskItem({ task, toggleComplete, removeTask }) {
    return (
        <div>
      <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>
            <button onClick={() => toggleComplete(task.id)}>Užbraukti</button>
            <button onClick={() => removeTask(task.id)}>Ištrinti</button>
        </div>
    );
}

export default TaskItem;
