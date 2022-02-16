import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import axios from 'axios';


const Login = () => {
  const { register, handleSubmit } = useForm()
  const [loginError, setLoginError] = useState("");
  const [login, setLogin] = useState("");
  const history = useHistory();

     
    const submit = async (data) => {
      console.log(data);
      const response = await axios
        .post(`https://ecommerce-exercise-backend.herokuapp.com/login/`, data)
        .catch(() => setLoginError(`Invalid Credential`));       
      setLogin(response.data.access);
      history.push("/products/");        
    }

    console.log(login)
    localStorage.setItem('login', login);

    return (
      <div>
        <form className='container__form' onSubmit={handleSubmit(submit)}>
          <br />
          <h1>Login</h1>
          <div className='form form__email'>
            <input {...register("email")} type="email" required />
          </div>
          <div className='form form__password'>
            <input {...register("password")} type="password" />
          </div>
          <div className='form form__button'>
            <button>Login</button>
          </div>
        </form>
        {loginError}
      </div>);
  };

  export default Login;