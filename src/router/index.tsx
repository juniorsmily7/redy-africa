import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/ui/pages/errorPage';
import NotFoundPage from '@/ui/pages/404page';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
