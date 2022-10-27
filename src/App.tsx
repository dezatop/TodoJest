import { Routes, Route } from 'react-router-dom';

import NotFoundPage from 'pages/general/NotFound';

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
