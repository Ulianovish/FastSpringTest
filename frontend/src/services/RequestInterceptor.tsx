import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth/authContext';

const client = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URI
});

const AuthInterceptor = () => {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const requestInterceptor = client.interceptors.request.use((config) => {
      if (auth && auth.token) {
        config.headers['Authorization'] = `Bearer ${auth.token}`;
      }
      return config;
    });

    return () => {
      client.interceptors.request.eject(requestInterceptor);
    };
  }, [auth]);

  return null;
};

export default client;
export { AuthInterceptor };
