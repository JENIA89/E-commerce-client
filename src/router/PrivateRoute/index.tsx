import React, { FC } from 'react';

interface PrivateRouteProps {
  children: JSX.Element;
  isAuth: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  isAuth,
}): JSX.Element => (isAuth ? children : <p>Not logged in</p>);

export default PrivateRoute;
