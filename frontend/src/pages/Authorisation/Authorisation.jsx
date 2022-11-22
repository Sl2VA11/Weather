import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AuthorisationMarkup from './AuthorisationMarkup';
import { login, register } from 'redux/auth/auth-operations';
import { useLocation, Navigate } from 'react-router-dom';
export default function Authorisation() {
  const location = useLocation();
  const dispatch = useDispatch()
  const isAuthIn = useSelector(state => state.auth.isLogged);
 
    


  const onSubmit = auth => {
    if (location.pathname === '/register') {
      dispatch(register(auth));
      return
    } 

    if (location.pathname === '/login') {
      dispatch(login(auth));
      return;
    } 
   
  };
  if (isAuthIn === true) {
    return <Navigate to="/user-page" />;
  }
  
  return <AuthorisationMarkup onSubmit={onSubmit} />;
}
