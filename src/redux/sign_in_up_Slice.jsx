import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../utils/storage";
import { router } from "../App";

const users = getItem("users", []);
const activeUser = getItem("activeUser", null);

export const sign_in_up_Slice = createSlice({
  name: "signUp",
  initialState: {
    users,
    user: activeUser,
    isSuccesSubmit: false,
  },
  reducers: {
    signUpSubmit: (state, action) => {
      state.users.push(action.payload);
      setItem("users", state.users);
      router.navigate("/sign-in");
    },
    signInSubmit: (state, action) => {
      const matchedUser = state.users.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );
      if (matchedUser) {
        state.isSuccesSubmit = true;
        state.user = matchedUser;
        setItem("activeUser", matchedUser);
        router.navigate("/");
      }
    },

    userChange: (state, action) => {
      const updateUser = action.payload;
      const userIndex = state.users.findIndex(
        (user) => user.username === updateUser.prevUsername
      );
      if (userIndex !== -1) {
        state.users[userIndex] = updateUser;
        state.user = updateUser;
        setItem("users", state.users);
        setItem("activeUser", updateUser);
      }
    },
  },
});

export const { signUpSubmit, signInSubmit, userChange } =
  sign_in_up_Slice.actions;
export default sign_in_up_Slice.reducer;
