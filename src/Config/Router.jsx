import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Index";
import Detail from "../Components/Detail/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

// export default function Router() {
//   return <RouterProvider router={router} />;
// }
