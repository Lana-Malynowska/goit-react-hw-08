import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post("/users/signup", body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (body, thunkAPI) => {
  try {
    const response = await goitAPI.post("/users/login", body);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Login failed"
    );
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goitAPI.post("/users/logout");
    removeAuthHeader();
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;

      if (!savedToken) {
        return thunkAPI.rejectWithValue("Token is not exist!");
      }
      setAuthHeader(savedToken);
      const response = await goitAPI.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
