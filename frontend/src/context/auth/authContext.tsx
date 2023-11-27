import { createContext, useEffect, useState } from 'react';
import { AuthInfoType } from '../../data/types';

interface AuthContextProps {
  auth: AuthInfoType;
  setAuth: React.Dispatch<React.SetStateAction<AuthInfoType>>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthInfoType>(() => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : ({} as AuthInfoType);
  });

  useEffect(() => {
    console.log('AUTH', auth);
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
