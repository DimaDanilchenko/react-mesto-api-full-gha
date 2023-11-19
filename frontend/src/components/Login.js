import React from "react";
import { useState } from 'react';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <div className="page">
      <form className="register" onSubmit={handleSubmit}>
        <p className="register__header">Вход</p>
        <input type="email" name="email" className="register__email" placeholder="Email:" value={email} onChange={handleEmailChange} />
        <input type="password" name="password" className="register__password" placeholder="Пароль:" value={password} onChange={handlePasswordChange} />
        <input type="submit" value="Войти" className="register__submit" />
      </form>
    </div>
  );
}

export default Login;