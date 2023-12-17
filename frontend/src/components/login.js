import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logoApp from '../css/appbar/logo-app.png';
import '../../src/components/admin/styles/responsive-login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.API_ENDPOINT}/login`, {
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



    const handleRegister = async () => {
        navigate("/register");
    };

    return (
<div style={{ backgroundColor: '#f3f3f3' }}>
            <div className="hero-body">
                <div className="container is-widescreen">
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
                                    <input type="email" id="form2Example1" className="form-control1" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="form2Example2">Password</label>
                                    <input type="password" id="form2Example2" className="form-control1" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <hr className='mb-1' />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary mb-4" style={{ width: '200px', backgroundColor: '#112546' }}>Sign in</button>
                                    <p>
                                        Not an admin?{' '}
                                        <a href="#register" className="link-button" onClick={handleRegister} style={{ color: '#112546' }}>
                                            Register Here
                                        </a>

                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
               
                    </div>
        

</div>
</div>
    );
};

export default Login;
