import { AppState } from 'store';

const selectors = {
  posts: (state: AppState) => state.main.posts,
};

export { selectors };
