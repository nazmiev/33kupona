import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Root from "./routes/root";
import Index, { loader as indexLoader } from "./routes/index";
import Category, { loader as categoryLoader } from "./routes/category";
import Action, { loader as actionLoader } from "./routes/action";
import Comments, { loader as commentsLoader } from "./routes/comments";
import Description, { loader as descriptionLoader } from "./routes/description";
import Offers, { loader as offersLoader } from "./routes/offers";
import Auth from "./routes/auth";
import Login from "./routes/login";
import Register from "./routes/register";
import ForgetPassword from "./routes/forget-password";
import Orders from "./routes/orders";

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Index />,
                    loader: indexLoader,
                },
                {
                    path: "refine/:action_id",
                    element: <Offers />,
                    loader: offersLoader,
                },
                {
                    path: "pay",
                    element: <Orders />,
                },
                {
                    path: "c/:category_id",
                    element: <Category />,
                    loader: categoryLoader,
                },
                {
                    path: "login",
                    element: <Login />,
                    children: [
                        { path: "auth", element: <Auth />, },
                        { path: "register", element: <Register />, },
                        { path: "forget_password", element: <ForgetPassword />, },
                    ]
                },
                {
                    path: "tomsk/",
                    children: [
                        {
                            path: ":partner_url/:action_id",
                            element: <Action />,
                            loader: actionLoader,
                            children: [
                                {
                                    index: true,
                                    element: <Description />,
                                    loader: descriptionLoader,
                                },
                                {
                                    path: "comment",
                                    element: <Comments />,
                                    loader: commentsLoader,
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
}