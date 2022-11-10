import { createSlice } from '@reduxjs/toolkit';

import { IList } from 'types';
import { thunks } from './thunks';
import { selectors } from './selectors';

interface IProps {
  tasks: IList[];
}

const initialState: IProps = {
  tasks: [],
};

const slice = createSlice({
  name: 'main',
  initialState: { ...initialState },
  reducers: {
    ADD_NEW_TASK: (state, { payload }) => {
      state.tasks = [payload, ...state.tasks];
    },
    DELETE_TASK: (state, { payload }) => {
      state.tasks = state.tasks.filter((el) => el.id !== payload);
    },
    CLEAR_TASK: (state) => {
      state.tasks = [];
    },
    CHECKED_CHANGE: (state, { payload }) => {
      state.tasks = state.tasks.map((el) => {
        return {
          ...el,
          checkedTask: el.id === payload.id ? payload.checked : el.checkedTask,
        };
      });
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(thunks.getPosts.fulfilled, (state, { payload }) => {
  //     state.posts = payload;
  //   });
  // },
});

const main = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { main };
export default slice.reducer;
