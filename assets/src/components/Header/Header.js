import { Link, useNavigate } from "react-router-dom";
import argenBankLogo from "../../img/argentBankLogo.webp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/authSlice";
import User_circle from "../../svg/user_circle.js";
import Quit from "../../svg/quit.js";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const { token } = useSelector((state) => state.auth);

  const switchLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <nav className="main-nav">
        <Link to="/">
          <img
            className="main-nav-logo-image"
            src={argenBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {token ? (
            <div className="main-nav-user-content">
              <Link className="main-nav-item" to="/User">
                <User_circle />
                {user.userName}
              </Link>
              <Link className="main-nav-item" to="/" onClick={switchLogout}>
                <Quit />
                Sign Out
              </Link>
            </div>
          ) : (
            <Link to="/SignIn" className="main-nav-item">
              <User_circle />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
