import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../utils/storage";
import { router } from "../App";

export const sign_in_up_Slice = createSlice({
  name: "signUp",
  initialState: {
    user: getItem("user"),
    isSuccesSubmit: false,
  },
  reducers: {
    signUpSubmit: (state, action) => {
      state.user = action.payload;
      setItem("user", state.user);
      router.navigate("/sign-in");
    },
    signInSubmit: (state, action) => {
      if (
        state.user.username === action.payload.username &&
        state.user.password === action.payload.password
      ) {
        state.isSuccesSubmit = true;
        router.navigate("/");
      }
    },
  },
});

export const { signUpSubmit, signInSubmit } = sign_in_up_Slice.actions;
export default sign_in_up_Slice.reducer;
