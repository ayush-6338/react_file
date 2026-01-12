import React, { useState } from 'react';

const RegistrationForm = () => {
  // 1. State for form fields
  const [formData, setFormData] = useState({ username: '', email: '' });
  // 2. State for errors
  const [errors, setErrors] = useState({});

  // Validation Logic
  const validate = () => {
    let newErrors = {};
    if (formData.username.length < 3) newErrors.username = "Username must be 3+ chars";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
    return newErrors;
  };

  // Handling Input (Controlled)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submitting Form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted Successfully:", formData);
      setErrors({}); // Clear errors
      alert("Success!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Controlled Form</h2>
      <div>
        <label>Username:</label>
        <input name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default Body;