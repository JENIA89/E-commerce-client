import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, NotFound, Products, Register } from 'pages';
import PrivateRoute from 'router/PrivateRoute';

const PublicRoute: FC = (): JSX.Element => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route
      path='/products'
      element={(
        <PrivateRoute>
          <Products />
        </PrivateRoute>
      )}
    />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);

export default PublicRoute;
