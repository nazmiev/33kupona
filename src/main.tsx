import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import ErrorPage from "./pages/error-page";
import Root from "./routes/root";
import Index, { loader as indexLoader } from "./routes/index";
import Category, { loader as categoryLoader } from "./routes/category";
import Action, { loader as actionLoader } from "./routes/action";
import Comments, { loader as commentsLoader } from "./routes/comments";
import Description, { loader as descriptionLoader } from "./routes/description";
import Offers, { loader as offersLoader } from "./routes/offers";
import Login from "./routes/login";
import Register from "./routes/register";
import ForgetPassword from "./routes/forget-password";

const router = createBrowserRouter([
  {
    path: "pay/:action_id",
    element: <Offers />,
    loader: offersLoader,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index />, loader: indexLoader },
      {
        path: "c/:category_id",
        element: <Category />,
        loader: categoryLoader,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forget_password",
        element: <ForgetPassword />,
      },
      {
        path: "tomsk/:action_id",
        element: <Action />,
        loader: actionLoader,
        children: [
          {
            index: true,
            element: <Description />,
            loader: descriptionLoader,
          },
          {
            path: ":comment_id/",
            element: <Comments />,
            // loader: commentsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
