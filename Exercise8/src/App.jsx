import React, { useState, useEffect } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text, done: false }]);
    setText('');
  }

  function toggle(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function remove(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <form onSubmit={addTask}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button>Add</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        <ul>
          {tasks.map(t => (
            <li key={t.id}>
              <label>
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggle(t.id)}
                />
                {t.done ? <s>{t.text}</s> : t.text}
              </label>
              <button onClick={() => remove(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
