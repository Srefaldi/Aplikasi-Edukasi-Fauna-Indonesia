import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logoApp from '../css/appbar/logo-app.png';
import './admin/styles/responsive-register.css'

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
        <section className="container-fluid py-5 hero has-background-grey-light">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <form onSubmit={handleRegister} className="bg-light p-4 rounded">
                        <p className="text-center">{msg}</p>
                        <div className="text-center mb-4">
                            <h1 className="h2">REGISTER</h1>
                        </div>
                        <div className="text-center mb-4">
                            <img data-src={logoApp} alt="Edu Fauna Logo" className="lazyload logo-app-login" />
                            <h2 className="h4">EDFA ID</h2>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control1" placeholder="Name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control1" placeholder="Email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control1" placeholder="******"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control1" placeholder="******"
                                value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                        </div>
                        <div className="text-center mb-3">
                            <button className="btn btn-primary mb-3" style={{ width: '200px', backgroundColor: '#112546' }}>Register</button>
                            <p>Already have an account? <a href="/login">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;
