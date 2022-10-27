import { createSlice } from '@reduxjs/toolkit';

import { thunks } from './thunks';
import { selectors } from './selectors';
import { ITest } from './ITest';

const initialState: ITest = {
  count: 1,
};

const slice = createSlice({
  name: 'test',
  initialState: { ...initialState },
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(thunks.authLogin.pending, (state) => {
  //       state.loginStatus = status.PENDING;
  //     });
  // },
});

const test = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { test };
export default slice.reducer;
