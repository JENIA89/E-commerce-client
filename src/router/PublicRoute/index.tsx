import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Products, Register } from 'pages';

const PublicRoute: FC = (): JSX.Element => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/products' element={<Products />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Routes>
);

export default PublicRoute;
