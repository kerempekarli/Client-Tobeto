import './App.css';
import Home from "./pages/home"
import About from "./pages/about"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';


function App() {
  return (
    <div className='app'>
        {/* Navbar veya diğer ortak bileşenler buraya gelebilir */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
