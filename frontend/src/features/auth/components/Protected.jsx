import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router"
import React from "react"

const Protected = ({ children }) => {
    const { loading, user } = useAuth()

    if (loading) {
        return (
            <main className="protected-loading">

                <div className="protected-loading__card">

                    {/* Animated Loader */}
                    <div className="protected-loading__loader">
                        <div className="loader-ring"></div>

                        <div className="loader-icon">
                            ✦
                        </div>
                    </div>

                    {/* Text */}
                    <h1>Checking Authentication</h1>

                    <p>
                        Please wait while we securely verify your session...
                    </p>

                    {/* Loading Dots */}
                    <div className="loading-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

            </main>
        )
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default Protected