<<<<<<< HEAD
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/auth/login";
import Home from "./pages/home/Home";
import DuyuruHaberler from "./components/home/duyuruHaberler";
import Egitimlerim from "./components/home/egitimlerim";
import Basvurularim from "./components/home/basvurularım";
import Anketlerim from "./components/home/anketlerim";
import Register from "./pages/auth/register";

function PrivateRoute({ element }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  useEffect(() => {
    // If the user is authenticated and tries to access the login page, redirect to home.
    if (isAuthenticated && location.pathname === "/login") {
      console.log(`Redirect to home. Path: ${location.pathname}`);
      window.location.href = "/home";
    }

    // If the user is not authenticated and not on the login page, redirect to login.
    if (!isAuthenticated && location.pathname !== "/login") {
      console.log(`Redirect to login. Path: ${location.pathname}`);
      window.location.href = "/login";
    }
  }, [isAuthenticated, location.pathname]);

  // Render the provided element if the user is authenticated, otherwise navigate to login.
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <div className="app">
      {/* Navbar or other common components can be placed here */}
      <Routes>
        <Route path="/home/*" element={<Home />}>
          <Route path="basvurularim" element={<PrivateRoute element={<Basvurularim />} />} />
          <Route path="egitimlerim" element={<PrivateRoute element={<Egitimlerim />} />} />
          <Route path="duyuru-haberler" element={<PrivateRoute element={<DuyuruHaberler />} />} />
          <Route path="anketlerim" element={<PrivateRoute element={<Anketlerim />} />} />
        </Route>
        <Route path="/login" element={<PrivateRoute element={<Login />} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
=======
import './App.css';
import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './pages/AdminDashboard';
import AnnouncementsComponent from './pages/Announcements';



function App() {
  return (
    <div className='app'>
        {/* Navbar veya diğer ortak bileşenler buraya gelebilir */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/announcements" element={<AnnouncementsComponent />} />
        </Routes>
>>>>>>> main
    </div>
  );
}

export default App;
