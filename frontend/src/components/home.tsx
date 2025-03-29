import React from 'react';
import '../css/home.css'; // Import the CSS file

const Homepage: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear the token
    alert('You have been logged out.');
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Fitness Tracker!</h1>
      <p>This is your homepage where you can track your progress and goals.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Homepage;