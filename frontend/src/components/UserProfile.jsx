import React, { useState, useEffect } from 'react';

// Dummy user data (will be replaced with backend API calls)
const dummyUsers = {
  1: {
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
    email: 'alice.smith@example.com', // Hardcoded email for testing
    phone: '123-456-7890' // Hardcoded phone for testing
  },
  2: {
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
    email: 'bob.johnson@example.com', // Hardcoded email for testing
    phone: '987-654-3210' // Hardcoded phone for testing
  },
};

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call to fetch user profile from backend
    // In a real app, you would use fetch to get user data from your backend API
    // Example:
    // const fetchUserProfile = async () => {
    //   setLoading(true);
    //   setError(null);
    //   try {
    //     const response = await fetch(`/api/users/${userId}`, {
    //       headers: {
    //         'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Include auth token
    //       }
    //     });
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setUser(data);
    //   } catch (e) {
    //     setError(e);
    //     console.error("Fetch user profile error:", e);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchUserProfile();

    // Using dummyUsers for simulation
    setTimeout(() => {
      const userData = dummyUsers[userId];
      if (userData) {
        setUser(userData);
        setLoading(false);
      } else {
        setError(new Error('User not found'));
        setLoading(false);
      }
    }, 500); // Simulate network delay
  }, [userId]);

  if (loading) {
    return <div>Loading user profile...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error loading user profile: {error.message}</div>;
  }

  if (!user) {
    return <div>User not found.</div>; // Should not reach here ideally, but for safety
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{user.name}</h2>
      <p className="text-gray-700 mb-2">Year: {user.year}, Department: {user.department}</p>
      <p className="text-gray-700 mb-2">Skills: {user.skills.join(', ')}</p>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 mr-1">★★★★★</span>
        <span className="text-gray-700">{user.rating} ({user.reviews.length} reviews)</span>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
      <p className="text-gray-700 mb-2">Email: {user.email}</p>
      <p className="text-gray-700 mb-4">Phone: {user.phone}</p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Reviews</h3>
      <ul>
        {user.reviews.map((review, index) => (
          <li key={index} className="mb-2 border-b pb-2">
            <p className="font-semibold">{review.author} says:</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
