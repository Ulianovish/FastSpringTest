import React, { useContext, useEffect, useState } from 'react';
import './auth.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Spinner from '../../components/Spinner/Spinner';
import useApiCall from '../../hooks/useApiCall';
import { AuthInfoType, LoginType } from '../../data/types';
import { loginUser } from '../../services/AuthService';
import { AuthContext } from '../../context/auth/authContext';
const Signin = () => {
  const { setAuth } = useContext(AuthContext);
  const [login, setLogin] = useState<LoginType>();
  const user = useApiCall<AuthInfoType>(() => loginUser(login?.email, login?.password), {
    dependencies: [login?.password, login?.email]
  });
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? `${location.search.split('=')[1]}` : '/';

  //form validation
  const schema = yup.object().shape({
    email: yup.string().required('Please Enter your Email').email(),
    password: yup
      .string()
      .required('Please Enter your password')
      .test(
        'regex',
        'Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase',
        (val) => {
          const regExp = new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
          );
          return regExp.test(val);
        }
      )
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const submitHandler = (data: LoginType) => {
    setLogin(data);
  };

  useEffect(() => {
    if (user?.data?.name) {
      setAuth(user?.data);
      navigate(redirect);
    }
  }, [user?.data?.name]);

  return (
    <div className="auth">
      <div className="form">
        <div className="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png" alt="" />
        </div>
        {user?.error && <div className="err">{user?.data as unknown as string}</div>}
        <form onSubmit={handleSubmit(submitHandler)}>
          <input type="email" placeholder="Email" {...register('email', { required: true })} />
          {errors?.email?.message && <p className="err">{errors?.email?.message}</p>}
          <input
            type="password"
            id=""
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {errors?.password?.message && <p className="err">{errors?.password?.message}</p>}
          <button type="submit">{user?.isLoading ? <Spinner /> : 'Login'}</button>
        </form>
        <div className="forget">
          <p>New user?</p> <Link to="/signup">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
