import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, NotFound, Products, Register } from 'pages';
import PrivateRoute from 'router/PrivateRoute';
import { useAppSelector } from 'hooks/redux';

const PublicRoute: FC = (): JSX.Element => {
  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/products'
        element={
          <PrivateRoute isAuth={isAuth}>
            <Products />
          </PrivateRoute>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoute;
