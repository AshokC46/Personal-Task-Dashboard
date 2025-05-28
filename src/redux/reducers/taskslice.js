import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push({ ...action.payload, timeSpent: 0 });
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(task => task.id !== action.payload);
    },
    addTime: (state, action) => {
      const { taskId, seconds } = action.payload;
      const task = state.taskList.find(t => t.id === taskId);
      if (task) {
        task.timeSpent += seconds;
      }
    },
  },
});

export const { addTask, deleteTask, addTime } = taskSlice.actions;
export default taskSlice.reducer;
