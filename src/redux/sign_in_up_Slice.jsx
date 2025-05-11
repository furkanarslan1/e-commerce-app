import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../utils/storage";

export const sign_in_up_Slice = createSlice({
  name: "signUp",
  initialState: {
    signUpInfo: getItem("user"),
  },
  reducers: {
    signUpSubmit: (state, action) => {
      state.signUpInfo = action.payload;
      setItem("user", state.signUpInfo);
    },
  },
});

export const { signUpSubmit } = sign_in_up_Slice.actions;
export default sign_in_up_Slice.reducer;
