import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MainSection from "../components/MainSection";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AddItem from "../Pages/AddL$F_Item/AddItem";
import AllItems from "../Pages/AllItems/AllItems";
import Details from "../Pages/Details/Details";
import MyItem from "../Pages/MyItem/MyItem";
import Update from "../Pages/UpdatePage/Update";
import AllRecoveredItem from "../Pages/All_Recovered_Item/AllRecoveredItem";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
        },
        {
          path: "/addItems",
          element: <PrivateRouter><AddItem></AddItem></PrivateRouter>
        },
        {
          path: '/allItems',
          element: <AllItems></AllItems>
        },
        {
          path: '/items/:id',
          element: <PrivateRouter><Details></Details></PrivateRouter>,
          loader: ({params})=> fetch(`http://localhost:4002/Items/${params.id}`)  
        },
        {
          path: '/myItems',
          element: <PrivateRouter><MyItem></MyItem></PrivateRouter>,
        },
        {
          path: '/updateItems/:id',
          element: <PrivateRouter><Update></Update></PrivateRouter>,
          loader: ({params})=> fetch(`http://localhost:4002/Items/${params.id}`)  
        },
        {
          path: '/allRecovered',
          element: <PrivateRouter><AllRecoveredItem></AllRecoveredItem></PrivateRouter>
        },
      ]
    },
  ]);

export default router;