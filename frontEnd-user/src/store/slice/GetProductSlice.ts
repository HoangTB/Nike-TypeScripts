import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState: "",
  reducers: {
    setSideBar: (state, action) => (
      (state = action.payload), console.log(state)
    ),
  },
});
export const { setSideBar } = SideBarSlice.actions;
export default SideBarSlice.reducer;
