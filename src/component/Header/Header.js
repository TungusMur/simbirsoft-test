import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="nav">
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
);

export default Header;
