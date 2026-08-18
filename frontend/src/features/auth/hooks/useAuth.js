import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    const { user, setUser, loading, setLoading } = context;


    const handleLogin = async ({ email, password }) => {
        setLoading(true);

        try {

            // Prevent empty login requests
            if (!email || !password) {
                throw new Error("Email and password are required");
            }

            const data = await login({ email, password });

            if (!data || !data.user) {
                throw new Error("Invalid login response");
            }

            setUser(data.user);

            return data;

        } catch (err) {

            console.error("Login failed:", err);

            // IMPORTANT:
            // Let Login.jsx catch this error.
            throw err;

        } finally {
            setLoading(false);
        }
    };


    const handleRegister = async ({ username, email, password }) => {
        setLoading(true);

        try {

            if (!username || !email || !password) {
                throw new Error("Username, email and password are required");
            }

            const data = await register({
                username,
                email,
                password
            });

            if (!data || !data.user) {
                throw new Error("Invalid registration response");
            }

            setUser(data.user);

            return data;

        } catch (err) {

            console.error("Registration failed:", err);

            // IMPORTANT:
            // Let Register.jsx catch this error.
            throw err;

        } finally {
            setLoading(false);
        }
    };


    const handleLogout = async () => {
        setLoading(true);

        try {

            await logout();

            setUser(null);

        } catch (err) {

            console.error("Logout failed:", err);

            throw err;

        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {

        const getAndSetUser = async () => {

            try {

                const data = await getMe();

                if (data && data.user) {
                    setUser(data.user);
                } else {
                    setUser(null);
                }

            } catch (err) {

                console.error("Get current user failed:", err);

                setUser(null);

            } finally {
                setLoading(false);
            }
        };

        getAndSetUser();

    }, []);


    return {
        user,
        loading,
        handleRegister,
        handleLogin,
        handleLogout
    };
};