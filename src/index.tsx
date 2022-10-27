import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import App from './App';
import './styles/app.scss';
import reportWebVitals from './reportWebVitals';
import Theme from './components/App/GlobalStyle/Theme';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const persist = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persist}
      >
        <BrowserRouter>
          <Theme>
            <App />
          </Theme>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
