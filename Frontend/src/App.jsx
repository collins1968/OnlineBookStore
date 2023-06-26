import { Link, Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './Components/Homepage'
import Footer from './Components/Footer';
import AdminPage from './Components/Admin/AdminPage';
import BooksOverview from './Components/Books/BooksOverview';
import RegisterForm from './Components/Register';
import Checkout from './Components/Checkout';
// import CartPage from './Components/cart';
import CartPage2 from './Components/cartPage';


import { Context } from './context/userContext/context';
function App() {
  const { user } = useContext(Context);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/home" element={user ? <BooksOverview /> : <Homepage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<CartPage2 />} />

    </Routes>
    <ToastContainer />
    </BrowserRouter>
      
    </>
  )
}

export default App
