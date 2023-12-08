import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            // Ini adalah contoh URL login - sesuaikan dengan endpoint login Anda
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
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body mt-5">
            <div className="container is-widescreen mt-5">
                        <div className="columns is-centered">
                            <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                            <div className="has-text-centered mb-4">
                                <h1 style={{ color: '#112546' }} className="title is-2">LOGIN</h1>
                            </div>
                            <div className="has-text-centered mb-4">
                                <p style={{ color: '#112546' }}>Logo Edu Fauna</p>
                                <h2 className='mt-5' style={{ color: '#112546' }}>Edukasi Fauna</h2>
                            </div>
                            <p className='mb-5' style={{ color: '#112546', fontSize: '18px', fontWeight: 'bold' }}> ____________________________________________________</p>

                                <p className="has-text-centered">{msg}</p>
                                <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example1">Email address</label>
                                    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    
                                </div>
                                <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example2">Password</label>
                                    <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                   
                                </div>
                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                            <label style={{ color: '#112546'}} className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a style={{ color: '#112546'}} href="#!">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="text-center">
                                <button type="submit" className="btn btn-primary mb-4" style={{ width: '200px', backgroundColor: '#112546' }}>Sign in</button>
                                <p style={{ color: '#112546'}} >Not a admin? <a style={{ color: 'black'}} href="/register">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
