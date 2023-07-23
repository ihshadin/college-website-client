import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import MainLayout from "../layouts/MainLayout";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
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
        ]
    }
])

export default router;