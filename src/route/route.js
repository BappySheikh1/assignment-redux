import { createBrowserRouter } from 'react-router-dom';
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
    }

])