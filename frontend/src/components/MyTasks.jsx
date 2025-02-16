import React from 'react';

// Dummy data for assigned tasks - replace with API call to backend
const dummyAssignedTasks = [
  {
    id: 4,
    title: 'Urgent: Fix Bug in React Component',
    description: 'Need someone to debug a React component. Issue with state management.',
    type: 'project',
    deadline: '2023-12-05T10:00',
    budget: 40,
    status: 'Assigned' // Example status
  },
  {
    id: 5,
    title: 'Statistics Homework - Hypothesis Testing',
    description: 'Need help with statistics homework, specifically hypothesis testing problems.',
    type: 'homework',
    deadline: '2023-12-07T17:00',
    budget: 25,
    status: 'In Progress' // Example status
  },
];

function MyTasks() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Assigned Tasks</h2>
      {dummyAssignedTasks.length === 0 ? (
        <p>No tasks assigned to you yet.</p>
      ) : (
        <ul className="mt-4">
          {dummyAssignedTasks.map(task => (
            <li key={task.id} className="border border-gray-200 rounded-md p-4 mb-2">
              <h3 className="text-lg font-semibold text-blue-700">{task.title}</h3>
              <p className="text-gray-700">{task.description}</p>
              <div className="flex mt-2 space-x-4">
                <p><span className="font-semibold">Type:</span> {task.type}</p>
                <p><span className="font-semibold">Deadline:</span> {new Date(task.deadline).toLocaleString()}</p>
                <p><span className="font-semibold">Budget:</span> ${task.budget}</p>
                <p><span className="font-semibold">Status:</span> {task.status}</p>
              </div>
              {/* Add actions like 'View Details', 'Submit Work' etc. if needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyTasks;
