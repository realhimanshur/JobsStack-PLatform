import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/LoginSignup.css';
import Navbar from '../shared/Navbar';

const LoginSignup = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // URL-based tab detection
    const [isLogin, setIsLogin] = useState(location.pathname === '/login');

    // Form states
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'candidate',
    });
    const [errorMsg, setErrorMsg] = useState('');

    // Watch for path change
    useEffect(() => {
        setIsLogin(location.pathname === '/login');
        setErrorMsg('');
    }, [location.pathname]);

    // Validation functions
    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

    // Input handlers
    const handleLoginChange = (e) =>
        setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const handleSignupChange = (e) =>
        setSignupData({ ...signupData, [e.target.name]: e.target.value });

    // Form submit handlers
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = loginData;
        if (!email || !validateEmail(email)) return setErrorMsg('Invalid email');
        if (!password) return setErrorMsg('Enter password');

        try {
            const res = await axios.post('http://localhost:8080/login', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const { token, role } = res.data;

            // Store token in localStorage (or cookie if needed)
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            alert('Login successful');
            console.log("Logged in as:", role);
            // navigate based on role
            navigate(role === 'employer' ? '/dashboard/employer' : '/dashboard/candidate');
        } catch (err) {
            console.error(err);
            setErrorMsg(err.response?.data?.error || 'Login failed');
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword, role } = signupData;

        if (!name) return setErrorMsg('Enter your name');
        if (!email || !validateEmail(email)) return setErrorMsg('Invalid email');
        if (!password || password.length < 6) return setErrorMsg('Weak password');
        if (password !== confirmPassword) return setErrorMsg('Passwords do not match');

        try {
            const res = await axios.post('http://localhost:8080/signup', {
                name,
                email,
                password,
                role
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Signup successful:', res.data);
            setSignupData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                role: 'candidate'
            });
            navigate('/login');
        } catch (err) {
            const message = err.response?.data?.error || 'Signup failed';
            console.error('Signup error:', message);
            setErrorMsg(message);
        }
    };

    return (
        <div>
            <Navbar/>

            <div className="container">
                <div className="tab-header">
                    <button
                        className={isLogin ? 'active' : ''}
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                    <button
                        className={!isLogin ? 'active' : ''}
                        onClick={() => navigate('/signup')}
                    >
                        Sign Up
                    </button>
                </div>

                {errorMsg && <div className="error-message">{errorMsg}</div>}

                {isLogin ? (
                    <form onSubmit={handleLoginSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleLoginChange}
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                        />
                        <button type="submit" className="submit-btn">
                            Log In
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleSignupSubmit}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={signupData.name}
                            onChange={handleSignupChange}
                            required
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={signupData.email}
                            onChange={handleSignupChange}
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            required
                        />
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={signupData.confirmPassword}
                            onChange={handleSignupChange}
                            required
                        />

                        <label>Job Role</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="candidate"
                                    checked={signupData.role === 'candidate'}
                                    onChange={handleSignupChange}
                                />
                                Candidate
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="employer"
                                    checked={signupData.role === 'employer'}
                                    onChange={handleSignupChange}
                                />
                                Employer
                            </label>
                        </div>

                        <button type="submit" className="submit-btn">
                            Sign Up
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginSignup;