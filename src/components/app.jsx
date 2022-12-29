import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "src/layout";
import Main from "src/layout/main";
import Home from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/notes/*",
        element: <Home />,
      },
      {
        path: "/tags",
        element: <Main />,
      },
      {
        path: "/archive",
        element: <Main />,
      },
      {
        path: "/trash",
        element: <Main />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
