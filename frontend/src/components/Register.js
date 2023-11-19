import React from "react";
import { Link } from "react-router-dom";
import {useState } from 'react';


function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(email, password);
    setEmail("");
    setPassword("");
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="page">
      <form className="login" onSubmit={handleSubmit}>
        <p className="login__header">Регистрация</p>
        <input type="email" name="email" className="login__email" placeholder="Email:" onChange={handleEmailChange} value={email} />
        <input type="password" name="password" className="login__password" placeholder="Пароль:" onChange={handlePasswordChange} value={password} />
        <input type="submit" value="Зарегистрироваться" className="login__submit" />
        <p className="login__text">Уже зарегистрированы? <Link to="/sign-in" className="login__link">Войти</Link></p>
      </form>
    </div>

  );
}

export default Register;