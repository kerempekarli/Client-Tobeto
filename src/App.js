import './App.css';
import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='app'>
        {/* Navbar veya diğer ortak bileşenler buraya gelebilir */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
