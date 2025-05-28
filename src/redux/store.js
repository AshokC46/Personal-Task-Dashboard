import { configureStore } from '@reduxjs/toolkit';
import taskReducer from "./reducers/taskslice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
