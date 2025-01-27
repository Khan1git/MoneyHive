import React, { useState } from 'react';
import './signup.css'; // Import the CSS for styling
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPass, setShowPass] = useState(false)

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const show = (e) => {
    e.preventDefault()
    setShowPass(!showPass)
  }

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
        const response = await fetch('http://localhost:3000/api/user/signup', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, role, email, password})
        })
        if (!response.ok) {  
          const data = await response.json(); 
          setError(data.message)
          // alert(data.message || "Signup failed!"); 
        }else{
          
          navigate('/login')
        }
    } catch (error) {
        console.log('signup failed', error)
    }
}


  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-card-header">
          <h2>Signup</h2>
          {
            error ? <p
            style={{
              color: "white",
              backgroundColor: 'red',
              borderRadius: '2px' 
            }}
            >{error}</p> :  <p>Create an account to access the dashboard</p>
          }
        </div>
        <div className="signup-card-content">
          <form onSubmit={handleSignup} className="signup-form">
            <div className="signup-input-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="name"
                placeholder="user name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="signup-input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="signup-input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* <button onClick={show}>
                {showPass ? "hide" : "show"}
              </button> */}


            <div className="signup-input-group">
              <label htmlFor="role">Role</label>
              <select onChange={(e) => setRole(e.target.value)} value={role} required>
                <option value="" disabled>Select your role</option>
                <option value="admin">Admin</option>
                <option value="parent">Parent</option>
                <option value="driver">Driver</option>
                <option value="student">Student</option>
              </select>
            </div>
            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>
        </div>
        <div className="signup-card-footer">
          <p className="signup-footer-text">
            Already have an account? <a href="/login">Login here</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
