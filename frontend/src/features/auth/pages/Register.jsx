import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await handleRegister({
                username,
                email,
                password
            })

            navigate("/")
        } catch (error) {
            console.error("Registration failed:", error)
        }
    }

    if (loading) {
        return (
            <main className="auth-loading">

                <div className="auth-loading__card">

                    <div className="auth-loading__spinner">
                        <span></span>
                    </div>

                    <h2>Creating your account</h2>

                    <p>
                        Please wait while we securely create your account...
                    </p>

                    <div className="auth-loading__dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

            </main>
        )
    }

    return (
        <main className="auth-page">

            {/* Decorative background */}
            <div className="auth-background auth-background--one"></div>
            <div className="auth-background auth-background--two"></div>

            <div className="auth-layout">

                {/* Left Side */}
                <section className="auth-intro">

                    <div className="auth-brand">

                        <div className="auth-brand__icon">
                            ✦
                        </div>

                        <span>GenAI Interview</span>

                    </div>


                    <h1>
                        Build your edge.
                        <span> Land the role.</span>
                    </h1>


                    <p>
                        Create your account and start preparing for interviews
                        with AI-powered strategies tailored to your target job.
                    </p>


                    <div className="auth-features">

                        <div className="auth-feature">

                            <div className="auth-feature__icon">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Personalized Strategies
                                </strong>

                                <p>
                                    Get preparation plans based on your target role.
                                </p>
                            </div>

                        </div>


                        <div className="auth-feature">

                            <div className="auth-feature__icon">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Resume Analysis
                                </strong>

                                <p>
                                    Let AI analyze your experience and skills.
                                </p>
                            </div>

                        </div>


                        <div className="auth-feature">

                            <div className="auth-feature__icon">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Interview Ready
                                </strong>

                                <p>
                                    Focus your preparation on what actually matters.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>


                {/* Register Card */}
                <section className="form-container">

                    <div className="form-header">

                        <div className="form-logo">
                            ✦
                        </div>

                        <h2>
                            Create Your Account
                        </h2>

                        <p>
                            Start your personalized interview preparation.
                        </p>

                    </div>


                    <form onSubmit={handleSubmit}>

                        {/* Username */}
                        <div className="input-group">

                            <label htmlFor="username">
                                Username
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle
                                            cx="12"
                                            cy="7"
                                            r="4"
                                        />
                                    </svg>

                                </span>

                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    autoComplete="username"
                                    required
                                />

                            </div>

                        </div>


                        {/* Email */}
                        <div className="input-group">

                            <label htmlFor="email">
                                Email Address
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="3"
                                            y="5"
                                            width="18"
                                            height="14"
                                            rx="2"
                                        />

                                        <polyline points="3 7 12 13 21 7" />

                                    </svg>

                                </span>

                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    autoComplete="email"
                                    required
                                />

                            </div>

                        </div>


                        {/* Password */}
                        <div className="input-group">

                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="3"
                                            y="11"
                                            width="18"
                                            height="10"
                                            rx="2"
                                        />

                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />

                                    </svg>

                                </span>

                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Create a password"
                                    autoComplete="new-password"
                                    required
                                    minLength={6}
                                />

                            </div>

                        </div>


                        {/* Register Button */}
                        <button
                            type="submit"
                            className="button primary-button"
                            disabled={loading}
                        >

                            <span>
                                Create My Account
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line
                                    x1="5"
                                    y1="12"
                                    x2="19"
                                    y2="12"
                                />

                                <polyline points="12 5 19 12 12 19" />

                            </svg>

                        </button>

                    </form>


                    {/* Login Link */}
                    <div className="form-divider">
                        <span>Already registered?</span>
                    </div>


                    <p className="register-text">

                        Already have an account?

                        <Link to="/login">
                            Login here
                        </Link>

                    </p>


                    {/* Security */}
                    <div className="security-note">

                        <span>🔒</span>

                        <p>
                            Your account information is securely protected.
                        </p>

                    </div>

                </section>

            </div>

        </main>
    )
}

export default Register