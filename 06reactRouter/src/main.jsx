import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';

import './index.css'
// import Home from './../components/Home/Home';
import User from './../components/User/User';
import Github, { githubInfoLoader } from '../components/Github/Github';

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "user/:userId",
//         element: <User />
//       },
//       {
//         path: "github",
//         element: <Github />,
// loader: { githubInfoLoader }
//       }
//     ]
//   }
// ])


const route = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/user/:userId' element={<User />} />
    <Route path='/github' element={<Github />}
      loader={githubInfoLoader}
    />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
