import { useState } from 'react';

function TaskForm({ addTask }) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText.trim()) return;
        addTask(taskText);
        setTaskText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Įveskite užduotį..."
            />
            <button type="submit">Pridėti užduotį</button>
        </form>
    );
}

export default TaskForm;
