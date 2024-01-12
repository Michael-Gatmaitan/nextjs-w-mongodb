import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserLogState {
  loggedIn: boolean;
  userAdmin: boolean;
}

const initialState: UserLogState = {
  loggedIn: false,
  userAdmin: false,
};

interface UserLoggedTypes {
  isValidUser: boolean;
  isUserAdmin: boolean;
}

export const userLogSlice = createSlice({
  name: "userlog",
  initialState,
  reducers: {
    userLogged: (state, action: PayloadAction<UserLoggedTypes>) => {
      const { isValidUser, isUserAdmin } = action.payload;

      state.loggedIn = isValidUser;
      state.userAdmin = isUserAdmin;
    },
  },
});

export const { userLogged } = userLogSlice.actions;

// Selectors
export const selectUserLoggedIn = (state: RootState) =>
  state.userLogSlice.loggedIn;

export const selectUserAdmin = (state: RootState) =>
  state.userLogSlice.userAdmin;

export default userLogSlice.reducer;
