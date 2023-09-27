import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistic from "../Pages/Statistic/Statistic";
import Error from "../Pages/Error/Error";
import DonationSection from "../Pages/Components/DonationsCards/DonationSection/DonationSection";

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
        loader: () => fetch("data.json"),
      },
      {
        path: "/donationSection/:id",
        element: <DonationSection />,
        loader: () => fetch("data.json"),
      },
    ],
  },
]);

export default myRoute;
