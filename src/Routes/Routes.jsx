import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/Dashboard/AddMeal/AddMeal";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Details from "../Pages/Home/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/meal/:id",
          element: <Details></Details>
        },
        {
          path: "/addMeal",
          element: <AddJob></AddJob>
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);

  export default router;