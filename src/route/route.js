import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/DashBoard/Dashboard';
import Main from '../Layout/Main/Main';
import Home from '../pages/Main/Home';

export const router=createBrowserRouter([
    {
        path:'/',
        element: <Main />,
         children:[
           {
               path :'/',
               element:<Home />
           }
         ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <p>hello</p>,
          },
          {
            path: "add-product",
            element: <p>hello</p>,
          },
        ],
      },

])