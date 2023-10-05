import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Waqas Shahid" },
  { id: "1", name: "Abbas Shahid" },
  { id: "2", name: "Bilal Shahid" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
