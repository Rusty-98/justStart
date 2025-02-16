import React, { useState, useEffect } from 'react';
import TaskFilters from './TaskFilters';

// Dummy task data (will be replaced with backend API calls)
const dummyTasks = [
  {
    id: 1,
    title: 'Math Assignment Help',
    description: 'Need help with Calculus assignment. Topics include derivatives and integrals.',
    type: 'assignment',
    deadline: '2023-12-10T18:00',
    budget: 20,
    department: 'Mathematics',
    posterEmail: 'taskposter1@example.com' // Hardcoded poster email
  },
  {
    id: 2,
    title: 'React Project - Simple To-Do App',
    description: 'Looking for someone to build a simple to-do app using React. Must be functional and well-documented.',
    type: 'project',
    deadline: '2023-12-15T23:59',
    budget: 50,
    department: 'Computer Science',
    posterEmail: 'taskposter2@example.com' // Hardcoded poster email
  },
  {
    id: 3,
    title: 'Economics Homework',
    description: 'Need assistance with microeconomics homework. Questions on supply and demand.',
    type: 'homework',
    deadline: '2023-12-08T12:00',
    budget: 15,
    department: 'Economics',
    posterEmail: 'taskposter3@example.com' // Hardcoded poster email
  },
];

function TaskList({ viewProfile }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call to fetch tasks from backend
    // In a real app, you would use fetch to get tasks from your backend API
    // Example:
    // const fetchTasks = async () => {
    //   setLoading(true);
    //   setError(null);
    //   try {
    //     const response = await fetch('/api/tasks', {
    //       headers: {
    //         'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Include auth token
    //       }
    //     });
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setTasks(data);
    //   } catch (e) {
    //     setError(e);
    //     console.error("Fetch tasks error:", e);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchTasks();

    // Using dummyTasks for simulation
    setTasks(dummyTasks); // Replace with API call when backend is ready
  }, []);

  const handleInterestClick = (task) => {
    alert(`Interest expressed for task: ${task.title}. \n\nNotification sent to task poster at ${task.posterEmail}.\n\nPlease exchange contact details offline.`);
    // Simulate sending notification to task poster via backend
    // In a real app, this would trigger an API call to notify the task poster
    // Example:
    // fetch('/api/express-interest', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    //   },
    //   body: JSON.stringify({ taskId: task.id }),
    // });
  };

  if (loading) {
    return <div className="text-center">Loading tasks...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error loading tasks: {error.message}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Browse Tasks</h2>
      <TaskFilters />
      <ul className="mt-4">
        {tasks.map(task => (
          <li key={task.id} className="border border-gray-200 rounded-md p-4 mb-2">
            <h3 className="text-lg font-semibold text-blue-700">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <div className="flex mt-2 space-x-4">
              <p><span className="font-semibold">Type:</span> {task.type}</p>
              <p><span className="font-semibold">Deadline:</span> {new Date(task.deadline).toLocaleString()}</p>
              <p><span className="font-semibold">Budget:</span> ${task.budget}</p>
              <p><span className="font-semibold">Department:</span> {task.department}</p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => handleInterestClick(task)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                I'm Interested
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
