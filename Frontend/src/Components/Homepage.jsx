import lib from '../assets/lib.png';
import RegisterForm from './Register';
import './homepage.css'
import LoginForm from './loginForm';
import { Link, Routes, BrowserRouter, Route } from 'react-router-dom';

 const Homepage = () => {
    return (
        <>
        <div className="homepage">
             <div className='image'>
                <img src={lib} alt="libImage" />
                </div>    
                 <LoginForm />
         <Routes>
            <Route path="/register" element={<RegisterForm />} />
        </Routes> 
       
       </div>
        </>       
    )};

export default Homepage;