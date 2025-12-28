import React, { useState } from 'react';

const Header = () => (
  <div style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
    <img src="https://via.placeholder.com/50" alt="Logo" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
    <span style={{ fontSize: '20px', verticalAlign: 'middle' }}>Awesome Company</span>
  </div>
);

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Username:', username);
    console.log('Password:', password);
    alert(`Logging in with Username: ${username}`); //Placeholder action
    // Reset form
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 70px)', backgroundColor: '#f0f0f0' }}>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
