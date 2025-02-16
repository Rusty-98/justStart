import React, { useState, createContext, useContext } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Registration from './components/Registration';
import TaskPostingForm from './components/TaskPostingForm';
import TaskList from './components/TaskList';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Signup from './components/Signup';
import MyTasks from './components/MyTasks'; // Import MyTasks component

// Auth Context
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem('authToken') ? { email: localStorage.getItem('authEmail') } : null);
  const navigate = useNavigate();

  const login = (email, authToken) => {
    setUser({ email });
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('authEmail', email);
    navigate('/browse-tasks'); // Redirect after login
  };

  const signup = (email, authToken) => {
    setUser({ email });
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('authEmail', email);
    navigate('/browse-tasks'); // Redirect after signup
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authEmail');
    navigate('/'); // Redirect to home after logout
  };

  const authContextValue = {
    user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
}


function App() {
  const [viewedProfileId, setViewedProfileId] = useState(null);

  const viewProfile = (userId) => {
    setViewedProfileId(userId);
    window.location.href = `/profile/${userId}`; // Navigate to profile page
  };


  return (
    <AuthProvider>
      <div className="App bg-gray-100 min-h-screen">
        <header className="bg-blue-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Student Work Platform</h1>
            <Navigation />
          </div>
        </header>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage viewProfile={viewProfile} />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/post-task" element={<ProtectedRoute><TaskPostingForm /></ProtectedRoute>}> </Route>
            <Route path="/browse-tasks" element={<ProtectedRoute><TaskList viewProfile={viewProfile} /></ProtectedRoute>}> </Route>
            <Route path="/profile/:userId" element={<ProtectedRoute><UserProfile userId={viewedProfileId} /></ProtectedRoute>}> </Route>
            <Route path="/my-tasks" element={<ProtectedRoute><MyTasks /></ProtectedRoute>}> </Route>{/* My Tasks Route */}
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}


function Navigation() {
  const auth = useAuth();
  return (
    <nav>
      <button onClick={() => window.location.href = '/'} className="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded mr-2">Home</button>
      {!auth.user && <button onClick={() => window.location.href = '/login'} className="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded mr-2">Login</button>}
      {!auth.user && <button onClick={() => window.location.href = '/signup'} className="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded mr-2">Signup</button>}
      {auth.user && <button onClick={() => window.location.href = '/post-task'} className="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded mr-2">Post Task</button>}
      {auth.user && <button onClick={() => window.location.href = '/browse-tasks'} className="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded mr-2">Browse Tasks</button>}
      {auth.user && <button onClick={() => window.location.href = '/my-tasks'} className="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded mr-2">My Tasks</button>} {/* My Tasks Button */}
      {auth.user && <button onClick={() => window.location.href = '/profile/1'} className="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded mr-2">My Profile</button>}
      {auth.user && <button onClick={auth.logout} className="bg-red-500 hover:bg-red-700 px-3 py-2 rounded">Logout</button>}
    </nav>
  );
}


export default App;
export { useAuth };
