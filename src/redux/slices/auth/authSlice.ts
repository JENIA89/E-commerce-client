import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/auth';
import { login } from './actionCreators';

interface AuthState {
  user: IUser | null;
  error: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled.type]: (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
    },
    [login.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export default auth.reducer;
