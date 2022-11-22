import style from './Authorisation.module.scss';
import imgLogin from '../../image/imageLogin.png';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AuthorisationMarkup({ onSubmit }) {
  const location = useLocation();
  const [auth, setAuth] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;

    setAuth(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(auth);

    e.target.reset();
  };
  return (
    <>
      <div
        className={
          location.pathname === '/register'
            ? style.registerPage
            : style.loginPage
        }
      >
        <div className="container">
          <motion.div
            className={style.loginCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.9 } }}
            exit={{ opacity: 0 }}
          >
            <div className={style.imageWrapper}>
              <img src={imgLogin} alt="" className={style.img} />
            </div>
            <div className={style.formWrapp}>
              <h1 className="title">
                {location.pathname === '/login' && 'Welcome back'}
                {location.pathname === '/register' && 'Glad to see you'}
              </h1>
              <form className={style.form} onSubmit={handleSubmit}>
                {location.pathname === '/register' && (
                  <div className="input-wrapper">
                    <input
                      type="name"
                      name="name"
                      className="input"
                      placeholder="Name"
                      onChange={handleChange}
                    />
                  </div>
                )}
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-wrapper">
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn">
                  {location.pathname === '/login' && 'Log in'}
                  {location.pathname === '/register' && 'Create'}
                </button>
              </form>

              {location.pathname === '/login' && (
                <p className={style.toRegisterText}>
                  Don't have an account?
                  <NavLink to={'/register'}>
                    <span className={style.textSpan}>Create</span>
                  </NavLink>
                </p>
              )}
              {location.pathname === '/register' && (
                <p className={style.toRegisterText}>
                  Already have an account?
                  <NavLink to={'/login'}>
                    <span className={style.textSpan}>Sign In</span>
                  </NavLink>
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
