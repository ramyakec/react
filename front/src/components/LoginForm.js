// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Add your login logic here, like sending data to the server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
      <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
