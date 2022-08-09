import { useAppDispatch } from 'hooks/redux';
import React, { useEffect } from 'react';
import { setUser } from 'redux/slices/auth/authSlice';
import AppRouter from 'router';
import { GlobalStyles } from 'styles/global';
import { getLocalStorageLoggedUser } from 'utils/storage';

const App = () => (
  <>
    <AppRouter />
    <GlobalStyles />
  </>
);

export default App;
