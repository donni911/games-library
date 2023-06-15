import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([{

    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "/games/:slug",
            element: <GameDetailPage />,
        }
    ]
}])


export default router