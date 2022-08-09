import { useAppSelector } from 'hooks/redux';
import React, { FC } from 'react';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }): JSX.Element => {
  const { user } = useAppSelector((state) => ({ ...state.auth }));

  return user ? children : <p>Not logged in</p>;
};

export default PrivateRoute;
