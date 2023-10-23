import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Root from "./routes/root";
import Index from "./routes/index";
import Category from "./routes/category";
import Action, { loader as actionLoader } from "./routes/action";
import Comments, { loader as commentsLoader } from "./routes/comments";
import Description, { loader as descriptionLoader } from "./routes/description";
import Offers, { loader as offersLoader } from "./routes/offers";
import Auth from "./routes/auth";
import Login from "./routes/login";
import Register from "./routes/register";
import ForgetPassword from "./routes/forget-password";
import Orders from "./routes/orders";
import Profile from "./routes/profile";
import Coupons from "./routes/coupons";
import MyActions from "./routes/myactions";

const baseName = import.meta.env.BASE_URL;

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
                    path: "/profile",
                    element: <Profile />,
                },
                {
                    path: "/coupons",
                    element: <Coupons />,
                },
                {
                    path: "/myactions",
                    element: <MyActions />,
                },
                {
                    path: "c/:category_url",
                    element: <Category />,
                },
                {
                    path: "auth",
                    element: <Auth/>,
                    children: [
                        { path: "login", element: <Login />, },
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
    ], {basename: baseName});
    return (
        <RouterProvider router={router}/>
    );
}
