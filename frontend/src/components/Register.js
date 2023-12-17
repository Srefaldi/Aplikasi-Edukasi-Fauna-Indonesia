import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logoApp from '../css/appbar/logo-app.png';
import './admin/styles/responsive-register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [showRegPopup, setShowRegPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check session status when the component is loaded
        // const loggedIn = localStorage.getItem('loggedIn');
        // if (!loggedIn) {
        //     navigate("/login");
        // }
    }, [navigate]);

    const showRegisterPopup = () => {
        setShowRegPopup(true);
    };

    const hideRegisterPopup = () => {
        setShowRegPopup(false);
        setRegPassword('');
    };

    const handleRegister = async () => {
        try {
            // Validate registration password before creating the user
            const response = await axios.post(`${process.env.API_ENDPOINT}/compare-password`, {
                enteredPassword: regPassword,
            });

            if (response.data.isPasswordValid) {
                // Password is valid, proceed with user registration
                await axios.post(`${process.env.API_ENDPOINT}/users`, {
                    name: name,
                    email: email,
                    password: password,
                    confPassword: confPassword,
                });
                navigate("/login");
            } else {
                // Password is invalid
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
        <section className="container-fluid py-5 hero has-background-grey-light">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <form onSubmit={(e) => e.preventDefault()} className="bg-light p-4 rounded">
                        <p className="text-center">{msg}</p>
                        <div className="text-center mb-4">
                            <h1 className="h2">REGISTER</h1>
                        </div>
                        <div className="text-center mb-4">
                            <img data-src={logoApp} alt="Edu Fauna Logo" className="lazyload logo-app-login" />
                            <h2 className="h4">EDFA ID</h2>
                            <p className="text-center">{msg}</p>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control1" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control1" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control1" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                        </div>
                        <div className="text-center mb-3">
                            <button onClick={showRegisterPopup} className="btn btn-primary mb-3" style={{ width: '200px', backgroundColor: '#112546' }}>Register</button>
                            <p>Already have an account? <a href="/login">Login</a></p>
                        </div>
                    </form>

                    {showRegPopup && (
                        <div className="modal" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', }}>
                            <div className="modal-content" style={{ marginTop: '100px' }}>
                                <span className="close" onClick={hideRegisterPopup}>&times;</span>
                                <form>
                                    <label>Password Registrasi:</label>
                                    <input type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} />
                                    <button type="button" onClick={handleRegister}>Register</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Register;
