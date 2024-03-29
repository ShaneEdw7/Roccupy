import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, IndexPage, Login } from "./pages";

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
        },
        {
          path: "properties",
          element: <div>Properties</div>,
        },
        {
          path: "index",
          element: <IndexPage />,
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
