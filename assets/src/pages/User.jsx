import Account from "../components/Account/account";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserInfo } from "../components/Fetch/fetch";
import EditUser from "../components/Edit/EditUser";

function User() {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      try {
        if (!token) {
          navigate("/");
          return;
        }
        await UserInfo(token, dispatch);
      } catch (error) {
        alert("Failed to fetch user profile");
        console.error("Failed to fetch user profile : ", error);
      }
    }

    getData();
  }, [token, navigate, dispatch]);

  const [edit, setEdit] = useState();

  const switchEdit = () => {
    setEdit(true);
  };
  const switchBack = () => {
    setEdit(false);
  };
  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.userName}
          </h1>
          {edit ? (
            <EditUser onCancel={switchBack} />
          ) : (
            <button className="edit-button" onClick={switchEdit}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          account_amount="$2,082.79"
          account_title="Argent Bank Checking (x8349)"
          account_amount_description="Available Balance"
        />
        <Account
          account_amount="$10,928.42"
          account_title="Argent Bank Savings (x6712)"
          account_amount_description="Available Balance"
        />
        <Account
          account_amount="$184.30"
          account_title="Argent Bank Credit Card (x8349)"
          account_amount_description="Current Balance"
        />
      </main>
    </>
  );
}
export default User;
