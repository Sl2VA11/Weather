import Authorisation from 'pages/Authorisation/Authorisation';
import Home from 'pages/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import UserPage from 'pages/UserPage/UserPage';
export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authorisation />} />
        <Route path="/register" element={<Authorisation />} />
        <Route path="/user-page" element={<UserPage />} />
      </Routes>
    </AnimatePresence>
  );
}
