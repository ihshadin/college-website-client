import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import MainLayout from "../layouts/MainLayout";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'colleges',
                element: <Colleges />
            },
            {
                path: 'admission',
                element: <Admission />
            },
            {
                path: 'my-college',
                element: <MyCollege />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Registration />
            },
        ]
    }
])

export default router;