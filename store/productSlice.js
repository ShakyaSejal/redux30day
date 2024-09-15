import { createSlice } from "@reduxjs/toolkit";
createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "null",
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
  },
});
