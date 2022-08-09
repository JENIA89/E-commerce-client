import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/auth';
import {
  getLocalStorageLoggedUser,
  removeLocalStorageLoggedUser,
  setLocalStorageLoggedUser,
} from 'utils/storage';
import { login } from './actionCreators';

interface AuthState {
  user: IUser | null;
  isAuth: boolean;
  error: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: getLocalStorageLoggedUser() || null,
  isAuth: false,
  isLoading: false,
  error: '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      removeLocalStorageLoggedUser();
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending.type]: (state: AuthState) => {
      state.isLoading = true;
    },
    [login.fulfilled.type]: (state: AuthState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isAuth = true;
      setLocalStorageLoggedUser(action.payload);
      state.user = action.payload;
    },
    [login.rejected.type]: (state: AuthState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setUser, setLogout } = auth.actions;

export default auth.reducer;
