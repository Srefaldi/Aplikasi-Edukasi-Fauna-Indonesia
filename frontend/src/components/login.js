import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logoApp from '../css/appbar/logo-app.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [showRegPopup, setShowRegPopup] = useState(false);
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            navigate("/home-admin");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    const showRegisterPopup = () => {
        setShowRegPopup(true);
    };

    const hideRegisterPopup = () => {
        setShowRegPopup(false);
        setRegPassword('');
    };

    const handleRegister = async () => {
        try {
          const response = await axios.post('http://localhost:5000/compare-password', {
            enteredPassword: regPassword,
          });
      
          if (response.data.isPasswordValid) {
            localStorage.setItem('loggedIn', true);
            // Redirect ke /register hanya jika kata sandi valid
            navigate("/register");
          } else {
            setMsg('Invalid registration password.');
            hideRegisterPopup();
          }
        } catch (error) {
          console.error('Error registering:', error);
          if (error.response) {
            setMsg(error.response.data.error);
          }
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body mt-5">
                <div className="container is-widescreen mt-5">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <div className="has-text-centered mb-4">
                                    <h1 className="title is-2">LOGIN</h1>
                                </div>
                                <div className="has-text-centered mb-4">
                                    <img src={logoApp} alt="Edu Fauna Logo" className="logo-app-login" />
                                    <h2 className='h4'>EDFA ID</h2>
                                </div>
                                <hr className="mb-1" />
                                <p className="has-text-centered">{msg}</p>
                                <div className="form-group mb-3">
                                    <label htmlFor="form2Example1">Email address</label>
                                    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="form2Example2">Password</label>
                                    <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <hr className='mb-1' />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary mb-4" style={{ width: '200px', backgroundColor: '#112546' }}>Sign in</button>
                                    <p>
                                        Not an admin?{' '}
                                        <button onClick={showRegisterPopup} type="button" className="link-button">
                                            Register
                                        </button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {showRegPopup && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={hideRegisterPopup}>&times;</span>
                        <form>
                            <label>Password Registrasi:</label>
                            <input
                                type="password"
                                value={regPassword}
                                onChange={(e) => setRegPassword(e.target.value)}
                            />
                            <button type="button" onClick={handleRegister}>Register</button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Login;
