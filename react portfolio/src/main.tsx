import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import AboutMe from './pages/AboutMe.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Contact from './pages/Contact.tsx';
import Resume from './pages/Resume.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
