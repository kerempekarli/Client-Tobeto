import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import DuyuruHaberler from "./components/home/duyuruHaberler";
import Egitimlerim from "./components/home/egitimlerim";
import Basvurularım from "./components/home/basvurularım";
import Anketlerim from "./components/home/anketlerim";

function App() {
  return (
    <div className="app">
      {/* Navbar veya diğer ortak bileşenler buraya gelebilir */}
      <Routes>
        <Route path="/home" element={<Home />}>
          {" "}
          <Route path="basvurularim" element={<Basvurularım />} />
          <Route path="egitimlerim" element={<Egitimlerim />} />
          <Route path="duyuru-haberler" element={<DuyuruHaberler />} />
          <Route path="anketlerim" element={<Anketlerim />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
