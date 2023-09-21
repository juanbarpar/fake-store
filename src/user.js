import React, { useState, useEffect } from "react";
import './user.css'; 
function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/4')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  if (!user) {
    return null; 
  }

  const username = user.username;
  const initials = user.name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');

  return (
    <div className="user-welcome">
      <div className="circle-initials">{initials}</div>
      <p>Welcome, {username}!</p>
    </div>
  );
}

export default User;