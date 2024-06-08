import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Fetch/fetch";
import { setToken } from "../../Redux/authSlice";
import UserCircle from "../../svg/user_circle";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const loginResp = await loginUser(email, password);
      const token = await loginResp.data.body.token;
      localStorage.setItem("token", token);
      if (loginResp.status === 200) {
        dispatch(setToken(token));
        navigate(`/User`);
      }
    } catch (error) {
      alert("Invalide Credentials");
    }
  };

  return (
    <>
      <section className="sign-in-content">
        <UserCircle />
        <h1>Sign In</h1>
        <form onSubmit={handleForm}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              required
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}

          <button type="submit" className="sign-in-button">
            Sign In
          </button>

          {/* <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  --> */}
        </form>
      </section>
    </>
  );
}
