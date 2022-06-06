import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from './Login.module.css';

const Login = () => {
   const {login} =useContext(AuthContext);
  const handleSubmit=()=>{
      login();
  }
  return (
    <div className={styles.Login}>
      <p>Login</p>
      <input data-cy="login-email" placeholder="email" value={'eve.holt@reqres.in'}/>
      <input data-cy="login-password" placeholder="password" value={'cityslicka'} />
      <button data-cy="login-submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
