import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';

import './index.css'
// import Home from './../components/Home/Home';
import User from './../components/User/User';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:userId",
        element: <User />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
