import { configureStore, createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "./GlobalState";
import { GlobalAction } from "./GlobalAction";

const initialState: GlobalState["global"] = {
  width: 0,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setWidth(state: GlobalState["global"], action: GlobalAction<number>) {
      state.width = action.payload;
    },
  },
});

const globalState = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
});

export default globalState;
export type { GlobalState };
