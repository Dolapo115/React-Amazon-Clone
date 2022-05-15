import React from "react";
import "./CSS/login.css";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { DataBucket } from "./StateProvider";
import { initializeApp } from "firebase/app";
import google from './icons/google.png'

function Login() {
  const firebaseConfig = {
    apiKey: "AIzaSyD4zkixLtWFpw3SAKUAHrNbHEqVSXGbgfE",
    authDomain: "react--clone-cb4ea.firebaseapp.com",
    projectId: "react--clone-cb4ea",
    storageBucket: "react--clone-cb4ea.appspot.com",
    messagingSenderId: "153007123318",
    appId: "1:153007123318:web:4be4e07a94cbd1e4e5a857",
  };

  const app = initializeApp(firebaseConfig);

  const [{ loginStatus }, dispatch] = DataBucket();

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  function handleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        if (user !== null) {
          const displayName = user.displayName;
          const _username = displayName.substr(displayName.indexOf(" ") + 1);
          const username = `${_username
            .charAt()
            .toUpperCase()}${_username.slice(1)}`;
          console.log(username);
          dispatch({
            type: "LOGGED_IN",
            loginStatus: true,
          });
          dispatch({
            type: "SET_USER",
            user: username,
          });
          
          localStorage.setItem("_user", user);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }


  return (
    <div className="login">

      <div className="login-container">
        <Link className = 'link' to={localStorage.getItem("_user") !== null ? "/" : "/login"}>
          <button
            type="submit"
            onClick={handleLogin}
            className="login-signInButton"
          >
          <img src = {google} alt = '' className = 'google-icon'/>
            <p className = 'sign-in-text'>Sign In With Google</p>
          </button>
        </Link>

        <p>
          By signing-in you agree to AMAZON CLONE's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
