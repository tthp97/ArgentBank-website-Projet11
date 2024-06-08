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
              <div className="main-nav-user">{user.name}</div>

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
