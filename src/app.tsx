import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Root from "./routes/root";
import Index from "./routes/index";
import Category from "./routes/category";
import Auth from "./routes/auth";
import Login from "./routes/login";
import Register from "./routes/register";
import ForgetPassword from "./routes/forget-password";
import Profile from "./routes/profile";
import Coupons from "./routes/coupons";
import MyActions from "./routes/myactions";
import ActionPage from "./pages/Action";

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
                            element: <ActionPage />,
                        },
                        {
                            path: ":partner_url/:action_id/comment",
                            element: <ActionPage comment={true}/>,
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
