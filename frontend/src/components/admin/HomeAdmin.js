import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const HomeAdmin = () => {
  const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
 
    useEffect(() => {
        refreshToken();
        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/login");
            }
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    const handleSetFaunaContentClick = () => {
        // Add logic here to handle 'Set Fauna Content' button click
        // For now, let's navigate to '/list-fauna'
        navigate('/set-fauna');
      };

    const handleSetQuizClick = () => {
        navigate('/set-quiz');
    };
 
    return (
        <div className="admin-layout" style={{marginTop: 100}}>
            <Sidebar />
            <div className="main-content">
                <div className="content">
                    <h1>Beranda</h1>
                    <hr style={{ border: '1px solid black', marginBottom: '20px' }} />
                    <h1>Welcome Back: {name}</h1>
                    <p>Hai Admin, selamat datang di sistem manajemen edukasi fauna.</p>

                    {/* Add buttons for 'Set Fauna Content' and 'Set Quiz' */}
                    <div style={{ marginTop: '20px' }}>
                        <button
                        style={{
                            padding: '15px',
                            fontSize: '18px',
                            marginRight: '20px',
                        }}
                        onClick={handleSetFaunaContentClick}
                        >
                        Set Fauna Content
                        </button>

                        <button
                        style={{
                            padding: '15px',
                            fontSize: '18px',
                        }}
                        onClick={handleSetQuizClick}
                        >
                        Set Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin