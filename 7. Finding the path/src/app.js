import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import ProfileClass from './Components/Profile';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';
const AppLayout = () => {
    return (
        <>
        <Header/>
        {/* <Outlet/> */}
        <Outlet/>
        <Footer/>
        </>
    )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path:"/about",  
        // why we need slash in parent path it means - from root after localhost:1234/
        element: <About/>,
        children: [
          {
            path:"profile", // it is relative path slash(/) mark is not required for children of children.
                              // parentpath+{relative path}
            element:<ProfileClass/>,
          },
        ]
      },
      {
        path:"/contact",
        element: <Contact/>,
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantMenu/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);