import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/login");
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
                            <form onSubmit={handleRegister} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="has-text-centered mb-4">
                                    <h1 style={{ color: '#112546' }} className="title is-2">REGISTER</h1>
                                </div>
                                <div className="has-text-centered mb-4">
                                    <p style={{ color: '#112546' }}>Logo Edu Fauna</p>
                                    <h2 className='mt-5' style={{ color: '#112546' }}>Edukasi Fauna</h2>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email"
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******"
                                            value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******"
                                            value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5 text-center">
                                    <button className="btn btn-primary mb-4" style={{ width: '200px', backgroundColor: '#112546' }}>Register</button>
                                    <p style={{ color: '#112546' }}>Already have an account? <a style={{ color: 'black' }} href="/login">Login</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;
