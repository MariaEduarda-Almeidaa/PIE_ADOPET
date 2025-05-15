  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Home from "../src/Pages/Home/Home.jsx";
  import LoginPage from "../src/Pages/Login/LoginPage.jsx";
  import RegisterPage from "../src/Pages/Register/RegisterPage.jsx";
  import AdocaoPage from "../src/Pages/Adocao/AdocaoPage.jsx";
  import SobrePage from "../src/Pages/Sobre/SobrePage.jsx";
  import PrivacyPolicy from '../src/Pages/Privacidade/PrivacyPolicy.jsx';
  import Layout from './Components/Layout/Layout';

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/adocao" element={<AdocaoPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  export default App;
