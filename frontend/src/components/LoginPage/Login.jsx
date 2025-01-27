import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {

      if (!email || !password) {
        alert("All fields are requried")
      }

      const response = await fetch('http://localhost:3000/api/user/login', {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
      })
      if (!response.ok) {
        const data = await response.json();
        setError(data.message)
        console.log(data)

      } else {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 4000)
  }, [])

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-card-header">
          <h2>Login</h2>
          {
            error ? <p
              style={{
                color: "white",
                backgroundColor: 'red',
                borderRadius: '2px'
              }}
            >{error}</p> : <p>Enter your credentials</p>
          }
        </div>
        <div className="login-card-content">
          <form onSubmit={handleLogin} className="login-form">
            <div className="login-input-group">
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
            <div className="login-input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <div className="login-input-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select your role</option>
                <option value="admin">Admin</option>
                <option value="parent">Parent</option>
                <option value="driver">Driver</option>
                <option value="student">Student</option>
              </select>
            </div> */}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        <div className="login-card-footer">
          <p>Don't have an account? <a href="/signup">Signup here</a>.</p>
        </div>
      </div>
    </div>
  )
}
