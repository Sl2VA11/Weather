import { NavLink } from 'react-router-dom';
import style from './NavBar.module.scss';
import { logout } from 'redux/auth/auth-operations';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
export default function NavBar() {
  const location = useLocation();
 const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);
  
  
  return (
    <header
      className={
        location.pathname === '/register' || location.pathname === '/login'
          ? style.headerSign
          : style.header
      }
    >
      <div className="container">
        <nav className={style.navbar}>
          
            <div className={style.authMenu}>
              {location.pathname === '/' && (
                <>
                  <NavLink to="/login" className="navbar-link">
                    Login
                  </NavLink>
                  <NavLink to="/register" className="navbar-link">
                    Register
                  </NavLink>
                </>
              )}

              {location.pathname === '/user-page' && (
                <>
                  <NavLink to="/" className="navbar-link" onClick={() => dispatch(logout())}>
                    Logout
                  </NavLink>
                  <div className={style.userNameWrapp}>
                    <p className={style.userName}>Hello {userName}</p>
                  </div>
                  
                </>
              )}




              {/* {location.pathname === '/login' && (
                <>
                  <NavLink to="/" className="navbar-link">
                    Home
                  </NavLink>
                  <NavLink to="/register" className="navbar-link">
                    Register
                  </NavLink>
                </>
              )}
              {location.pathname === '/register' && (
                <>
                  <NavLink to="/" className="navbar-link">
                    Home
                  </NavLink>
                  <NavLink to="/login" className="navbar-link">
                    Login
                  </NavLink>
                </>
              )} */}
            </div>
          
        </nav>
      </div>
    </header>
  );
}
