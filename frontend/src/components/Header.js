import headerLogo from "../images/Vector.svg";
import { Link, useLocation } from 'react-router-dom';


function Header(props) {
  const location = useLocation();
  const path = location.pathname === "/sign-in" ? "/sign-up" : "/sign-in";
  const title = location.pathname === "/sign-in" ? "Регистрация" : "Вход";
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      {props.loggedIn ? (
        <>
          <div className="header__data">
            <p className="header__email">{props.email}</p>
            <Link
              className="header__link"
              to="/"
              onClick={props.onSignOut}
            >
              Выйти
            </Link>
          </div>
        </>
      ) : (
        <Link className="header__link" to={path}>
          {title}
        </Link>
      )}
    </header>
  );
}

export default Header;