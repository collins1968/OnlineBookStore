import { Link, Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Homepage from './Components/Homepage'
import Footer from './Components/Footer';
import AdminPage from './Components/Admin/AdminPage';
import BooksOverview from './Components/Books/BooksOverview';
import RegisterForm from './Components/Register';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/home" element={<BooksOverview />} />
      {/* <Route path="/checkout" element={<Check} /> */}

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
