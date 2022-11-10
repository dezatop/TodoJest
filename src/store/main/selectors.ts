import { AppState } from 'store';

const selectors = {
  tasks: (state: AppState) => state.main.tasks,
};

export { selectors };
