import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'


const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        // Clear previous error
        setError("")

        try {

            await handleLogin({ email, password })

            // Login successful
            navigate('/')

        } catch (error) {

            console.error("Login failed:", error)

            // Get backend error message if available
            const message =
                error?.response?.data?.message ||
                error?.message ||
                "Invalid email or password"

            setError(message)

            // Clear both fields after failed login
            setEmail("")
            setPassword("")
        }
    }


    if (loading) {
        return (
            <main className="auth-loading">

                <div className="auth-loading__card">

                    <div className="auth-loading__spinner">
                        <span></span>
                    </div>

                    <h2>Signing you in</h2>

                    <p>
                        Please wait while we securely authenticate your account...
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

            {/* Decorative background elements */}
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
                        Prepare smarter.
                        <span> Interview better.</span>
                    </h1>

                    <p>
                        Get personalized interview strategies powered by AI,
                        based on your resume, skills and target job description.
                    </p>

                    <div className="auth-features">

                        <div className="auth-feature">
                            <div className="auth-feature__icon">✓</div>
                            <div>
                                <strong>AI-Powered Preparation</strong>
                                <p>Generate a personalized interview strategy.</p>
                            </div>
                        </div>

                        <div className="auth-feature">
                            <div className="auth-feature__icon">✓</div>
                            <div>
                                <strong>Resume Analysis</strong>
                                <p>Let AI understand your skills and experience.</p>
                            </div>
                        </div>

                        <div className="auth-feature">
                            <div className="auth-feature__icon">✓</div>
                            <div>
                                <strong>Job-Specific Questions</strong>
                                <p>Prepare for the role you're actually targeting.</p>
                            </div>
                        </div>

                    </div>

                </section>


                {/* Login Card */}
                <section className="form-container">

                    <div className="form-header">

                        <div className="form-logo">
                            ✦
                        </div>

                        <h2>Welcome Back</h2>

                        <p>
                            Sign in to continue your interview preparation.
                        </p>

                    </div>


                    <form onSubmit={handleSubmit}>

                        {/* ERROR MESSAGE */}
                        {error && (
                            <div
                                style={{
                                    color: "#ff4d4d",
                                    backgroundColor: "rgba(255, 77, 77, 0.1)",
                                    border: "1px solid rgba(255, 77, 77, 0.25)",
                                    borderRadius: "6px",
                                    padding: "10px 12px",
                                    marginBottom: "15px",
                                    fontSize: "14px"
                                }}
                            >
                                {error}
                            </div>
                        )}

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
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setError("")
                                    }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    autoComplete="email"
                                    required
                                />

                            </div>

                        </div>


                        <div className="input-group">

                            <div className="password-label">
                                <label htmlFor="password">
                                    Password
                                </label>
                            </div>

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
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setError("")
                                    }}
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    required
                                />

                            </div>

                        </div>


                        <button
                            type="submit"
                            className="button primary-button"
                            disabled={loading}
                        >
                            <span>Login to Your Account</span>

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
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>

                        </button>

                    </form>


                    <div className="form-divider">
                        <span>New here?</span>
                    </div>


                    <p className="register-text">
                        Don't have an account?

                        <Link to="/register">
                            Create an account
                        </Link>
                    </p>


                    <div className="security-note">
                        <span>🔒</span>

                        <p>
                            Your credentials are securely protected.
                        </p>
                    </div>

                </section>

            </div>

        </main>
    )
}

export default Login