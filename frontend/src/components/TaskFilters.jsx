import React from 'react';

function TaskFilters() {
  return (
    <div className="flex space-x-4 mb-4">
      <input type="text" placeholder="Search tasks..." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <select className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="">All Types</option>
        <option value="assignment">Assignment</option>
        <option value="project">Project</option>
        <option value="homework">Homework</option>
        <option value="other">Other</option>
      </select>
      <select className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="">All Departments</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Economics">Economics</option>
        {/* Add more departments as needed */}
      </select>
      {/* Add more filters like Budget, Deadline sorting etc. */}
    </div>
  );
}

export default TaskFilters;
