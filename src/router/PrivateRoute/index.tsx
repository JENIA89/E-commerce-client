import React, { FC } from 'react';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }): JSX.Element => (
  <div>PrivateRoute</div>
);

export default PrivateRoute;
