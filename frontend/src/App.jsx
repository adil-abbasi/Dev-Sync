import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import OAuthSuccess from './pages/OAuthSuccess.jsx';
import Marketplace from './pages/Marketplace.jsx';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
   
  );
}

export default App;
