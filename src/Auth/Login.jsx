import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/home");
    };
    return (
        <>
            <div className='flex flex-col  h-screen justify-center items-center'>
                <h1 className='text-3xl font-bold'>Military Asset Management</h1>
                <h1>Sign in to your Account</h1>
                <div className='h-[300px] w-[450px] pl-10 pt-8 pr-10 flex flex-col justify-items-start bg-white shadow-md rounded-2xl'>
                    <h1>Username</h1>
                    <input type="text" className='mt-2 rounded shadow-md' placeholder='Username' />
                    <h1 className='mt-5'>Password</h1>
                    <input type="password" className='mt-2 rounded shadow-md' placeholder='Password' />
                    <span className='mt-5 flex justify-end'>Forgot your password?</span>
                    <button onClick={handleSignIn} className='h-[40px] rounded mt-5 bg-blue-600 '>
                        <span className='text-white font-semibold'>Sign In</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login