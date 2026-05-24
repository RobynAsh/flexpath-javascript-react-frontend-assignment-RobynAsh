import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  NavLink,
} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/search', element: <Search /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
