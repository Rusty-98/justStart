import React from 'react';

function UserProfileCard({ user, viewProfile }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{user.name}</h3>
      <p className="text-gray-600 mb-1">Year: {user.year}, {user.department}</p>
      <p className="text-gray-600 mb-2">Skills: {user.skills.join(', ')}</p>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 mr-1">★★★★★</span>
        <span className="text-gray-700">{user.rating} ({user.reviews.length} reviews)</span>
      </div>
      <button
        onClick={() => viewProfile(user.id)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        View Profile
      </button>
    </div>
  );
}

export default UserProfileCard;
