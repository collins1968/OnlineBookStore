import lib from '../assets/lib.png';
import RegisterForm from './Register';
import './homepage.css'
import LoginForm from './loginForm';
import { useState } from 'react';
import { Link, Routes, BrowserRouter, Route } from 'react-router-dom';

 const Homepage = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };
    return (
        <>
        <div className="homepage">
             <div className='image'>
                <img src={lib} alt="libImage" />
                </div>
                {isLoginForm ? (
                    <RegisterForm onFormChange={toggleForm} />
                ) : (
                    <LoginForm onFormChange={toggleForm} /> 
                    )}    
     </div>
        </>       
    )};

export default Homepage;