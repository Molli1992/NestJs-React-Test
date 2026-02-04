import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    }

    getTasks()
  }, []);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {tasks && tasks.map((task) => {
        return (
          <h1>{task}</h1>
        )
      })}
    </div>
  )
};

export default App
