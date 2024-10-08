import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "../src/globals/stauts/Statuses";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setStatus, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;

export function register(data) {
  return async function registerThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));

    try {
      await axios.post("https://react30.onrender.com/api/user/register", data);

      if (Response.status === 200) {
        dispatch(setUser(data));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
export function login(data) {
  return async function loginThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING))
    try {
      await axios.post("https://react30.onrender.com/api/user/login", data);

      if (response === 200 && response.data.token) {
        dispatch(setStatus(STATUSES.SUCCESS))
        dispatch(setToken(response.data.token))

      } else {
        dispatch(setStatus(STATUSES.ERROR))

      }
    } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))

    }
  };
}
