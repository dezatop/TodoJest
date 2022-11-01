import { Routes, Route } from 'react-router-dom';

import NotFoundPage from 'pages/general/NotFound';
import MainPage from 'pages/MainPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
