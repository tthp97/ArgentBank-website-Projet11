import axios from "axios";
import { setUserInfo, setNewUserName } from "../../Redux/authSlice.js";

export const API_URL = "http://localhost:3001/api/v1";
export const loginUser = async (email, password) => {
  const request = await axios.post(`${API_URL}/user/login`, {
    email,
    password,
  });

  return request;
};

export async function UserInfo(token, dispatch) {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(`${API_URL}/user/profile`, {
      method: "POST",
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUserInfo(data.body));
      dispatch(setNewUserName(data.body.userName));
    } else {
      console.error("Profile request error : ", response.status);
    }
  } catch (error) {
    alert("code", error);
  }
}

export async function majUsername(token, newUserName, dispatch) {
  try {
    const requestBody = {
      userName: newUserName,
    };

    const request = await fetch(`${API_URL}/user/profile`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await request.json();
    dispatch(newUserName(data.body.userName));
  } catch (error) {
    alert("Username could not be modified");
    console.error(error);
  }
}
