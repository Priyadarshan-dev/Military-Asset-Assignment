import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = async () => {
        try {
            const response = await fetch("https://servermms.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                localStorage.setItem("authToken", data.token);
                navigate("/home"); // Redirect after successful login
            } else {
                setError(data.message || "Invalid username or password");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <h1 className='text-3xl font-bold'>Military Asset Management</h1>
            <h1>Sign in to your Account</h1>
            <div className='h-[300px] w-[450px] pl-10 pt-8 pr-10 flex flex-col justify-items-start bg-white shadow-md rounded-2xl'>
                <h1>Username</h1>
                <input
                    type="text"
                    className='mt-2 rounded shadow-md'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <h1 className='mt-5'>Password</h1>
                <input
                    type="password"
                    className='mt-2 rounded shadow-md'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className='mt-5 flex justify-end'>Forgot your password?</span>
                <button
                    onClick={handleSignIn}
                    className='h-[40px] rounded mt-5 bg-blue-600 '
                >
                    <span className='text-white font-semibold'>Sign In</span>
                </button>
                {error && <p className='text-red-500 mt-2'>{error}</p>}
            </div>
        </div>
    );
}

export default Login;
