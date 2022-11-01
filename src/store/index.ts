import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AnyAction, CombinedState, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';

// MODULES
import main from './main';

const appReducer = combineReducers({
  main,
});

const rootReducer = (
  state: CombinedState<any> | undefined,
  action: AnyAction
) => {
  // if (action.type === 'auth/logout/fulfilled') {
  //   return appReducer(undefined, action);
  // }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'project',
  storage,
  blacklist: [],
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export default store;
