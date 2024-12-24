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
          element: <AddItem></AddItem>
        },
        {
          path: '/allItems',
          element: <AllItems></AllItems>
        },
        {
          path: '/items/:id',
          element: <Details></Details>,
          loader: ({params})=> fetch(`http://localhost:4002/Items/${params.id}`)  
        },
        {
          path: '/myItems',
          element: <MyItem></MyItem>,
        },
        {
          path: '/updateItems/:id',
          element: <Update></Update>,
          loader: ({params})=> fetch(`http://localhost:4002/Items/${params.id}`)  
        },
        {
          path: '/allRecovered',
          element: <AllRecoveredItem></AllRecoveredItem>
        },
      ]
    },
  ]);

export default router;