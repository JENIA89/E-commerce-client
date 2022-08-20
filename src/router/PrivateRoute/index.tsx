import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { Login } from 'pages';
import React, { FC, useEffect } from 'react';
import { profile } from 'redux/slices/auth/actionCreators';

interface PrivateRouteProps {
  children: JSX.Element;
  isAuth: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }): JSX.Element => {
  const { isAuth, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(profile());
  }, [isAuth]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return isAuth ? children : <Login />;
};

export default PrivateRoute;
