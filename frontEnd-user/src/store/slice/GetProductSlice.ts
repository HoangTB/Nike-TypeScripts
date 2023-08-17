import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState: "",
  reducers: {
    setSideBar: (state, action) => (state = action.payload),
  },
});
export const { setSideBar } = SideBarSlice.actions;
export default SideBarSlice.reducer;
