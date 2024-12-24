import React, { useState } from 'react';
import googlepic from '../media/search.png';
import facebookpic from '../media/communication.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formState, setFormState] = useState("signup");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleFormState = () => {
        setFormState(formState === "signup" ? "login" : "signup");
    };

    const login = async () => {
        try {
            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (data.success) {
                localStorage.setItem('authToken', data.token);
                window.location.replace("/"); // Navigate to home page
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

    const signUp = async () => {
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone_number: formData.phoneNumber,
                    password: formData.password,
                    confirm_password:formData.confirmPassword
                }),
            });

            const data = await response.json();
            if (data.success) {
                alert('Signup successful');
                setFormState('login'); // Switch to login form after signup
            } else {
                alert(data.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred during signup. Please try again.');
        }
    };

    return (
        <div className='w-full h-screen bg-gray-100 flex items-center justify-center'>
            <div className='space-y-5'>
                <h2 className='font-bold text-3xl text-center'>{formState === "signup" ? "Sign Up" : "Login"}</h2>
                <div className='flex gap-4 justify-center'>
                    <div className='px-4 py-2 rounded-md border border-gray-500'>
                        <img src={googlepic} className='w-8 h-8' alt="google" />
                    </div>
                    <div className='px-4 py-2 rounded-md border border-gray-500'>
                        <img src={facebookpic} className='h-8 w-8' alt="facebook" />
                    </div>
                </div>
                <div className='flex justify-center mb-6 items-center gap-5'>
                    <span className='w-28 h-[2px] bg-gray-300'></span>
                    <span>or</span>
                    <span className='w-28 h-[2px] bg-gray-300'></span>
                </div>

                {formState === "signup" ? (
                    <div className='flex flex-col gap-y-3'>
                        <div className='flex gap-3'>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder='First Name'
                                className='w-1/2 border rounded p-2'
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder='Last Name'
                                className='w-1/2 border rounded p-2'
                            />
                        </div>
                        <div className='flex gap-3'>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder='Email'
                                className='w-1/2 border rounded p-2'
                            />
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder='Phone Number'
                                className='w-1/2 border rounded p-2'
                            />
                        </div>
                        <div className='flex gap-3'>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder='Password'
                                className='w-1/2 border rounded p-2'
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder='Confirm Password'
                                className='w-1/2 border rounded p-2'
                            />
                        </div>
                        <button
                            className='py-2 bg-indigo-500 rounded text-gray-100 font-medium text-xl'
                            onClick={signUp}
                        >
                            Sign Up
                        </button>
                    </div>
                ) : (
                    <div className='flex flex-col gap-y-3'>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email'
                            className='w-80 border rounded p-2'
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder='Password'
                            className='w-80 border rounded p-2'
                        />
                        <div className="flex gap-2">
                            <input type="checkbox" /> <span>Remember me?</span>
                        </div>
                        <button
                            className='py-2 bg-indigo-500 rounded text-gray-100 font-medium text-xl'
                            onClick={login}
                        >
                            Log in
                        </button>
                    </div>
                )}

                <Link to="/" className='text-indigo-600'>Forget Password?</Link>
                <div>
                    <span>
                        {formState === "signup"
                            ? "Already have an account?"
                            : "New to Hostinger?"}
                    </span>
                    <button
                        className='bg-indigo-600 text-white ml-2 px-3 py-1 rounded'
                        onClick={toggleFormState}
                    >
                        {formState === "signup" ? "Log in" : "Sign up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
