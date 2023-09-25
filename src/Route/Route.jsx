import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistic from "../Pages/Statistic/Statistic";
import Error from "../Pages/Error/Error";

const myRoute = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
    ],
  },
]);

export default myRoute;
