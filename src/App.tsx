import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Applications,
  Dashboard,
  IndexPage,
  Login,
  Maintenance,
  Properties,
} from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
      errorElement: <div>Whoops</div>,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "properties",
              element: <Properties />,
            },
          ],
        },
        // {
        //   path: "properties",
        //   element: <Properties />,
        // },
        // {
        //   path: "index",
        //   element: <IndexPage />,
        // },
        {
          path: "Applications",
          element: <Applications />,
        },
        {
          path: "Maintenance",
          element: <Maintenance />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
      errorElement: <div>Whoops</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
