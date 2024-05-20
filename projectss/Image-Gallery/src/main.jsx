import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ImageDetails from './components/Image/Image.jsx';
import SingleImage from './components/SingleImage/SingleImage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ImageDetails />,
  },
  {
    path: '/imgDetails/:id',
    element: <SingleImage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
  