import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from './pages/register.jsx';
import { Login } from './pages/login.jsx';
import { ErrorPage } from './pages/error.jsx';
import { Products } from './pages/products.jsx';
import { HomePage } from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <Products />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
