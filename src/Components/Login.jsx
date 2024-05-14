import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginComponent = () => {
    const navigate = useNavigate();
    const signUpFormRef = useRef(null);

    const handleToggleClick = () => {
        const logincontainer = document.getElementById('logincontainer');
        logincontainer.classList.toggle('active');

        // Always navigate to the login page when clicking the sign-up button
        navigate('/login');
    };

    const handleSignIn = () => {
        // Navigate to the dashboard
        navigate('/dashboard');
    };

    return (
        <div className='body'>
        <div className="logincontainer" id="logincontainer">
            <div className="form-logincontainer sign-up">
                <form ref={signUpFormRef}>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registeration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="button" onClick={handleToggleClick}>Sign Up</button>
                </form>
            </div>
            <div className="form-logincontainer sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button type="button" onClick={handleSignIn}>Sign In</button>
                </form>
            </div>
            <div className="toggle-logincontainer">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={handleToggleClick}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" onClick={handleToggleClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default LoginComponent;
