import Authorisation from 'pages/Authorisation/Authorisation';
import Home from 'pages/Home/Home';
// import authorisation from 'pages/authorisation/authorisation';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';
import NavBar from './NavBar/NavBar';
// import Register from '../pages/Register/Register'

export const App = () => {
  
  return (
    <>
      {/* <NavBar /> */}
      <AnimatedRoutes/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authorisation />} />
        <Route path="/register" element={<Authorisation />} />
      </Routes> */}
    </>
  );
};
