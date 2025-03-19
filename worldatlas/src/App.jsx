import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

import Country from './pages/Country';
import AppLayout from './Components/Layout/AppLayout';
import Errorpage from './pages/Errorpage';
import CountryDetails from './Components/Layout/CountryDetails';
import Contact from './pages/Contact';
 const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Errorpage />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"about",
        element:<About />,
      },
      {
        path:"country",
        element:<Country />,
      },
      {
         path: "country/:id",  //Dynamic route ":"
        element:<CountryDetails />
      },
      {
        path:"contact",
        element:<Contact />,
      },
    ]
  }
 ])
const App = () => {
  return (
    <>
     <RouterProvider router ={router}></RouterProvider>
    </>
  )
}

export default App
