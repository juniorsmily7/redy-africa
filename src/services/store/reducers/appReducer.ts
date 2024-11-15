/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface AppState {
  stateStore: boolean;
  // Add other state properties here if needed
}

// Define the initial state
const initialAppState: AppState = {
  stateStore: false,
};

// Define the payload type
type UpdateStorePayload = {
  key: keyof AppState;
  value: any;
};

export const appSlice = createSlice({
  name: 'appStore',
  initialState: initialAppState,
  reducers: {
    updateStore(state, action: PayloadAction<UpdateStorePayload>) {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
  // extraReducers: (builder) => {
  //   // builder.addMatcher(
  //   //   authApiSlice.endpoints.login.matchFulfilled,
  //   //   (state, action) => {

  //   //   }
  //   // );

  // },
  selectors: {
    stateStore: (stateStore) => stateStore,
  },
});

export const { updateStore } = appSlice.actions;
export default appSlice.reducer;
