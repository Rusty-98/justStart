import React from 'react';
import UserProfileCard from './UserProfileCard';

const dummyUsers = [
  {
    id: 1,
    name: 'Alice Smith',
    year: 3,
    department: 'Computer Science',
    skills: ['React', 'JavaScript', 'Node.js', 'Problem Solving'],
    rating: 4.5,
    reviews: [
      { author: 'TaskPoster1', comment: 'Excellent work, delivered on time!' },
      { author: 'TaskPoster2', comment: 'Great communication and quality.' },
    ],
    email: 'alice.smith@example.com' // Hardcoded email for testing
  },
  {
    id: 2,
    name: 'Bob Johnson',
    year: 2,
    department: 'Mathematics',
    skills: ['Calculus', 'Linear Algebra', 'Statistics', 'Tutoring'],
    rating: 4.8,
    reviews: [
      { author: 'TaskPoster3', comment: 'Bob is fantastic at explaining complex math concepts.' },
      { author: 'TaskPoster4', comment: 'Highly recommend for math help.' },
    ],
    email: 'bob.johnson@example.com' // Hardcoded email for testing
  },
];

function HomePage({ viewProfile }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Student Work Platform</h2>
      <p className="text-gray-700 mb-4">Find assignments and get paid for your work!</p>
      <p className="text-gray-700 mb-6">Explore profiles of top solvers:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyUsers.map(user => (
          <UserProfileCard key={user.id} user={user} viewProfile={viewProfile} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
