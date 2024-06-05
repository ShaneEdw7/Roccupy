import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  Applications,
  Dashboard,
  IndexPage,
  Login,
  Maintenance,
  Properties,
  Accounts,
  Communications,
  Files,
  Reports,
  PropertyInputForm,
  PropertyDetails,
} from "./pages";

library.add(fas);

// /dashboard/properties/123-apple-st
// /dashboard/properties/456-banana-st
// /dashboard/properties/:propertyId

const App = () => {
  const handleFormSubmit = () => {
    console.log("Form submitted successfully");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
      errorElement: <div>Whoops</div>,
    },
    {
      path: "/Login",
      element: <Login />,
      errorElement: <div>Whoops</div>,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "Properties",
          element: <Properties />,
        },
        {
          path: "property/:id",
          element: <PropertyDetails />,
        },
        {
          path: "PropertyInputForm",
          element: <PropertyInputForm onFormSubmit={handleFormSubmit} />,
        },
        {
          path: "Applications",
          element: <Applications />,
        },
        {
          path: "Maintenance",
          element: <Maintenance />,
        },
        {
          path: "Accounts",
          element: <Accounts />,
        },
        {
          path: "Communications",
          element: <Communications />,
        },
        {
          path: "Files",
          element: <Files />,
        },
        {
          path: "Reports",
          element: <Reports />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
