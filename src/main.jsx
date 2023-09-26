import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routers/Home/index.jsx";
import Aparelhos from "./routers/Aparelhos/index.jsx";
import VisualizarAparelho from "./routers/VisualizarAparelho/index.jsx";
import Error from "./routers/error/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aparelhos",
        element: <Aparelhos />,
        component: { Aparelhos },
      },
      {
        path: "/visualizar_aparelho/:id",
        component: { VisualizarAparelho },
        element: <VisualizarAparelho />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
