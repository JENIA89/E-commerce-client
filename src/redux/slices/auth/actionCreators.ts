import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginModel } from 'interfaces/auth';
import * as api from '../../../api/auth';

export const login = createAsyncThunk(
  'auth/login',
  async (data: ILoginModel, { rejectWithValue }) => {
    try {
      const response = await api.login(data);
      return response.data;
    } catch (error: any) {
      rejectWithValue(error.response.data);
    }
  },
);
