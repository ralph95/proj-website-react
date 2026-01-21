import { configureStore, createSlice } from "@reduxjs/toolkit";

// Example slice (you can add more slices later)
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions if you want to use them
export const { increment, decrement } = counterSlice.actions;

// Configure store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
