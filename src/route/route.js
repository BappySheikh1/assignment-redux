import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/DashBoard/Dashboard';
import Main from '../Layout/Main/Main';
import Home from '../pages/Main/Home';
import ProductList from '../pages/Dashboard/ProductList';
import AddProduct from '../pages/Dashboard/AddProduct';
import DetailsPage from '../pages/Main/DetailsPage';
import UpdateProduct from '../pages/Dashboard/UpdateProduct';

export const router=createBrowserRouter([
    { 
        path:'/',
        element: <Main />,
         children:[
           {
               path :'/',
               element:<Home />
           },
           {
            path:'/home/:id',
            loader: ({params})=> fetch(`https://moon-tech-server-ruddy.vercel.app/products/${params.id}`),
            element : <DetailsPage />
           }
         ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <ProductList />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
          {
            path: "update/:id",
            loader: ({params})=> fetch(`https://moon-tech-server-ruddy.vercel.app/products/${params.id}`),
            element: <UpdateProduct />,
          },
        ],
      },

])