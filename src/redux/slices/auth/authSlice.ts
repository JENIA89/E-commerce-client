import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/auth';
import { removeLocalStorageToken, setLocalStorageToken } from 'utils/storage';
import { login, profile } from './actionCreators';

interface AuthState {
  user: IUser | null;
  error: string;
  isLoading: boolean;
  isAuth: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isAuth: false,
  error: '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogout: (state) => {
      removeLocalStorageToken();
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending.type]: (state: AuthState) => {
      state.isLoading = true;
    },
    [login.fulfilled.type]: (state: AuthState, action: PayloadAction<any>) => {
      state.isLoading = false;
      setLocalStorageToken(action.payload?.token);
      state.user = action.payload;
    },
    [login.rejected.type]: (state: AuthState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload?.message;
    },
    [profile.pending.type]: (state: AuthState) => {
      state.isLoading = true;
    },
    [profile.fulfilled.type]: (
      state: AuthState,
      action: PayloadAction<any>,
    ) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    [profile.rejected.type]: (state: AuthState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setLogout } = auth.actions;

export default auth.reducer;
