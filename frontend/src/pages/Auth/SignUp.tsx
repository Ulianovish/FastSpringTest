import React, { useContext, useEffect, useState } from 'react';
import './auth.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../context/auth/authContext';
import { AuthInfoType, SignupType } from '../../data/types';
import { signupUser } from '../../services/AuthService';
import useApiCall from '../../hooks/useApiCall';
const Signup = () => {
  const { setAuth } = useContext(AuthContext);
  const [signUp, setSignUp] = useState<SignupType>();
  const user = useApiCall<AuthInfoType>(
    () => signupUser(signUp?.name, signUp?.email, signUp?.password, signUp?.phone),
    {
      dependencies: [signUp?.name, signUp?.email, signUp?.phone, signUp?.password]
    }
  );
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? `${location.search.split('=')[1]}` : '/';

  //form validation
  const schema = yup.object().shape({
    name: yup.string().required('Please Enter your Name'),
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
      ),
    phone: yup
      .string()
      .required('Please Enter your Phone Number (10 digits)')
      .matches(/^[0-9]{10}$/, 'Invalid Phone Number (10 digits)')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const submitHandler = (data: SignupType) => {
    setSignUp(data);
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
          <input type="text" placeholder="Name" {...register('name', { required: true })} />
          {errors?.name?.message && <p className="err">{errors?.name?.message}</p>}
          <input type="email" placeholder="Email" {...register('email', { required: true })} />
          {errors?.email?.message && <p className="err">{errors?.email?.message}</p>}
          <input type="phone" placeholder="Phone" {...register('phone', { required: true })} />
          {errors?.phone?.message && <p className="err">{errors?.phone?.message}</p>}
          <input
            type="password"
            id=""
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {errors?.password?.message && <p className="err">{errors?.password?.message}</p>}
          <button type="submit">{user?.isLoading ? <Spinner /> : 'Register'}</button>
        </form>
        <div className="forget">
          <p>Alreday a user?</p> <Link to="/signin">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
