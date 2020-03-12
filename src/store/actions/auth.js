import axios from "axios";
import key from '../../key'

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;

    if (isLogin) {
      url =`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
    }

    const response = await axios.post(url, authData);
    console.log(response.data)
  }
}
