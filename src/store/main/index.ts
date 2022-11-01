import { createSlice } from '@reduxjs/toolkit';

import { thunks } from './thunks';
import { selectors } from './selectors';

const initialState = {
  posts: 1,
};

const slice = createSlice({
  name: 'main',
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.getPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
    });
  },
});

const main = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { main };
export default slice.reducer;
