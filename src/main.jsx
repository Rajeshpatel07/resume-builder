import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Dashboard, Resume, Select } from './components/index.js';

const routes = [
  {
    path: "",
    component: <Dashboard />
  },
  {
    path: "/build",
    component: <Select />
  },
  {
    path: "/build/new",
    component: <Resume />
  }

]

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {
        routes.map(item => (
          <>
            <Route
              key={item.path}
              path={item.path}
              element={item.component}
            />
          </>
        ))
      }

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
