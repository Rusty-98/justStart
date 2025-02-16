import React, { useState } from 'react';
import { useAuth } from '../App';

function TaskPostingForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [deadline, setDeadline] = useState('');
  const [budget, setBudget] = useState('');
  const [attachments, setAttachments] = useState([]); // To store file attachments
  const auth = useAuth();
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'idle', 'loading', 'success', 'error'

  const handleAttachmentChange = (event) => {
    // For simulation, we'll just store file names. In a real app, handle file uploads to backend.
    const files = Array.from(event.target.files);
    setAttachments(files.map(file => ({ name: file.name, type: file.type })));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus('loading');

    const taskData = {
      title,
      description,
      type,
      deadline,
      budget,
      posterEmail: auth.user.email, // Include user email, if needed
      attachments: attachments.map(file => file.name) // Send only names for simulation
    };

    // Simulate API call to backend to post task
    // In a real app, you would send a POST request to your backend task posting endpoint
    // and handle file uploads appropriately (e.g., using FormData).
    // Example (conceptual - file upload handling is more complex):
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('description', description);
    // formData.append('type', type);
    // formData.append('deadline', deadline);
    // formData.append('budget', budget);
    // attachments.forEach(file => formData.append('attachments', file)); // Append files
    // try {
    //   const response = await fetch('/api/tasks', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    //     },
    //     body: formData, // Send FormData for file uploads
    //   });
    //   // ... handle response
    // } catch (error) {
    //   // ... handle error
    // }


    // Simulation of successful task posting
    setTimeout(() => {
      setSubmissionStatus('success');
      alert('Task posted successfully (simulated) with attachments: ' + attachments.map(f => f.name).join(', '));
      setTitle('');
      setDescription('');
      setType('');
      setDeadline('');
      setBudget('');
      setAttachments([]);
    }, 1000); // Simulate network delay
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Post a Task</h2>
      {submissionStatus === 'error' && <p className="text-red-500 mb-2">Failed to post task. Please try again.</p>}
      {submissionStatus === 'success' && <p className="text-green-500 mb-2">Task posted successfully!</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">-- Select Type --</option>
            <option value="assignment">Assignment</option>
            <option value="project">Project</option>
            <option value="homework">Homework</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">Deadline:</label>
          <input
            type="datetime-local"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">Budget (Optional):</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attachments">Attachments (Optional):</label>
          <input
            type="file"
            id="attachments"
            multiple // Allow multiple files
            onChange={handleAttachmentChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {attachments.length > 0 && (
            <ul className="mt-2">
              {attachments.map((file, index) => (
                <li key={index} className="text-sm text-gray-600">{file.name} ({file.type})</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={submissionStatus === 'loading'}
          >
            {submissionStatus === 'loading' ? 'Posting...' : 'Post Task'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskPostingForm;
