import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MainSection from "../components/MainSection";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>error</p>,
      children: [
        {
          path: '/',
          element: <MainSection></MainSection>
        },
        {
          path:'/login',
          element: <LoginPage></LoginPage>
        },
        {
          path:'/register',
          element: <RegisterPage></RegisterPage>
        }
      ]
    },
  ]);

export default router;