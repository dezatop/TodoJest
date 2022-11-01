import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';

const getPosts = createAsyncThunk('posts', async () => {
  try {
    const { data } = await api.post.getPost();
    return data;
  } catch (err) {
    console.log(err);
  }
});

const thunks = {
  getPosts,
};

export { thunks };
