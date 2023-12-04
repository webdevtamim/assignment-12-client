import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/Dashboard/AddMeal/AddMeal";
import Dashboard from "../Layout/Dashboard";
import Details from "../Pages/Home/Details/Details";
import AllMeals from "../Pages/Home/AllMeals/AllMeals";
import UpcomingMeal from "../Pages/Home/UpcomingMeal/UpcomingMeal";
import Checkout from "../Pages/Home/Checkout/Checkout";
import Error from "../Pages/Home/Error/Error";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        path: "/meals",
        element: <AllMeals></AllMeals>
      },
      {
        path: "/upcoming-meals",
        element: <UpcomingMeal></UpcomingMeal>
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>
      },
      {
        path: "/addMeal",
        element: <AddJob></AddJob>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>
      }
    ]
  }
]);
export default router;