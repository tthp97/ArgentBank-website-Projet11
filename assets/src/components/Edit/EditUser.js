import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { majUsername } from "../Fetch/fetch";
import { setNewUserName } from "../../Redux/authSlice";

export default function EditUser({ onCancel }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [newUserName, setUsername] = useState(user.userName);
  const [firstname, setFirstname] = useState(user.firstName);
  const [lastname, setLastname] = useState(user.lastName);

  const handleCancel = (event) => {
    event.preventDefault();
    onCancel();
  };

  const handleSave = (event) => {
    event.preventDefault();
    const response = majUsername(token, newUserName, dispatch);
    if (response) {
      dispatch(setNewUserName(newUserName));
      onCancel();
    }
  };

  return (
    <>
      <form>
        <div className="edit-container">
          <div className="input_wrapper">
            <h1>Edit user info</h1>
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              id="username"
              value={newUserName}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="on"
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="firstname">First name:</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              disabled
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="lastname">Last name:</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              disabled
            />
          </div>
          <button type="button" className="sign-in-button" onClick={handleSave}>
            Save
          </button>
          <button
            type="button"
            className="sign-in-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
