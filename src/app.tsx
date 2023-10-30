import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Root from "./routes/root";
import Index from "./routes/index";
import Category from "./routes/category";
import Auth from "./routes/auth";
import Profile from "./routes/profile";
import Coupons from "./routes/coupons";
import MyActions from "./routes/myactions";
import ActionPage from "./pages/Action";
import Past from "./routes/past";
import Agreement from "./routes/agreement";

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
                    path: "/past",
                    element: <Past />,
                },
                {
                    path: "/agreement",
                    element: <Agreement />,
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
                    path: "auth/login",
                    element: <Auth authType={'login'}/>,
                },
                {
                    path: "auth/register",
                    element: <Auth authType={'register'}/>,
                },
                {
                    path: "auth/forget_password",
                    element: <Auth authType={'forget_password'}/>,
                },
                {
                    path: "tomsk/",
                    children: [
                        {
                            path: ":partner_url/:action_id",
                            element: <ActionPage comment={false}/>,
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
