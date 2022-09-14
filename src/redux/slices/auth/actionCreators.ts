import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginModel } from "api/auth/types";

import * as api from "../../../api/auth";

export const login = createAsyncThunk(
  "auth/login",
  async (data: ILoginModel, { rejectWithValue }) => {
    try {
      const response = await api.login(data);
      return response.data;
    } catch (error: any) {
      rejectWithValue(error.response.data);
    }
  },
);

export const profile = createAsyncThunk(
  "auth/profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.profile();
      return response.data;
    } catch (error: any) {
      rejectWithValue(error.response.data);
    }
  },
);
