import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path:"register",
        element:<Register />,
      }

    ]
  },

]);

// const router =createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />} >,
//       <Route path='' element={<Home />} />,
//       <Route path='login' element={<Login />} />,
//       <Route path='register' element={<Register />} />,
      
//       {/* <Route path='Contact' element={<Contact />} /> */}
      
//     </Route>

//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
)
