import { useCallback, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const [click, setClick] = useState('');
  const checkWindowWidth = useCallback(() => {
    if (window.outerWidth > 1023) {
      setClick('');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);

    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  useEffect(() => {
    if (click) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [click]);

  useEffect(() => {
    setClick('');
  }, [location]);

  return (
    <>
      <div className="burger">
        <div className="burgerForm">
          <button
            id="burgerButton"
            className={`burgerButton ${click}`}
            onClick={() => {
              if (click === '') {
                setClick('active');
              } else if (click === 'active') {
                setClick('');
              }
            }}
          >
            <span></span>
          </button>
        </div>
      </div>
      <div id="header" className={`header ${click}`}>
        <div id="nav" className="nav">
          <div className="logo">
            <NavLink to="/">
              <h1>Logo</h1>
            </NavLink>
          </div>
          <div className="navBar">
            <div className="navBarItem">
              <NavLink to="/competitions">
                <h1>Лиги/Соревнования</h1>
              </NavLink>
            </div>
            <div className="navBarItem">
              <NavLink to="/teams">
                <h1>Команды</h1>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
