import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LoadComponent = () => <h5> Loading....</h5>

const Home = lazy(() => import(/* webpackChunkName: "home" */ './components/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ './components/About'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />

  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <Suspense fallback={<LoadComponent />}>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </Suspense>
);
