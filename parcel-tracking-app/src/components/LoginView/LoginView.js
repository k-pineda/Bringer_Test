import React, { useState } from 'react';
import axios from 'axios';

function LoginView() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  // Function to submit login and password and generate a token
  const generateToken = async () => {
    if (!login || !password) {
      setError('Login and password are required');
      return;
    }

    try {
      const response = await axios.post('/Generate_Token', { login, password });
      setToken(response.data.token);
      setError(''); // Clear any previous error
    } catch (error) {
      setError('Error generating token. Check your login and password.');
      console.error('Error generating token:', error);
    }
  };

  return (
    <div>
      <h2>Login View</h2>
      <form>
        <div>
          <label>Login:</label>
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={generateToken}>
          Generate Token
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {token && (
        <div>
          <h3>Generated Token:</h3>
          <pre>{token}</pre>
        </div>
      )}
    </div>
  );
}

export default LoginView;
