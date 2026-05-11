import { RouterProvider } from '@tanstack/react-router';
import { createRoot } from 'react-dom/client';
import { getRouter } from './router';
import './global.css';

const router = getRouter();

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(<RouterProvider router={router} />);
