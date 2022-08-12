import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { profile } from 'redux/slices/auth/actionCreators';
import AppRouter from 'router';
import { GlobalStyles } from 'styles/global';

const App = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(profile());
  }, [isAuth]);
  return (
    <>
      <AppRouter />
      <GlobalStyles />
    </>
  );
};

export default App;
