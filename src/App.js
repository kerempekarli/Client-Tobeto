import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/auth/login";
import Home from "./pages/home/Home";
import DuyuruHaberler from "./components/home/duyuruHaberler";
import Egitimlerim from "./components/home/egitimlerim";
import Basvurularim from "./components/home/basvurularım";
import Anketlerim from "./components/home/anketlerim";
import Register from "./pages/auth/register";
import Surveys from "./pages/home/surveys"
import SurveyForm from "./pages/survey-form"

function PrivateRoute({ element }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Kullanıcı kimlik doğrulamasını geçmişse ve login sayfasına yönlendiriliyorsa, anasayfaya yönlendir.
    if (isAuthenticated && location.pathname === "/login") {
      console.log(`Redirect to home. Path: ${location.pathname}`);
      navigate("/home", { replace: true });
    }

    // Kullanıcı kimlik doğrulamasını geçmiş değilse ve login sayfasında değilse, giriş sayfasına yönlendir.
    if (!isAuthenticated && location.pathname !== "/login") {
      console.log(`Redirect to login. Path: ${location.pathname}`);
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  // Kullanıcı kimlik doğrulamasını geçmişse sağlanan bileşeni render et, aksi takdirde giriş sayfasına yönlendir.
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
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/survey-form/:id" element={<SurveyForm />} />
      </Routes>
    </div>
  );
}

export default App;
