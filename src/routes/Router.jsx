import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/Add.jsx";
//mport Home from "../pages/Home.jsx";
const Home = lazy (() => import("../pages/Home.jsx"));
const Add = lazy (() => import("../pages/Add.jsx"));
const Edit = lazy(() => import("../pages/Edit.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Layout = lazy(() => import("../pages/Layout.jsx"));
//const Home = lazy(() => import("../pages/Home.jsx"));
//const  = lazy(() => import("../pages/.jsx"));
//const  = lazy(() => import("../pages/.jsx"));
//const  = lazy(() => import("../pages/.jsx"));

//import Edit from "../pages/Edit.jsx";
//import Login from "../pages/Login.jsx";
//import Register from "../pages/Register.jsx";
//import Layout from "../components/Layout.jsx";
import { Children, lazy } from "react";
import AdminLayout from "./AdminLayout";
import NotAllowed from "./NotAllowed";
import ModOrAdminPage from "../pages/ModOrAdminPage.jsx";




const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    Children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/notallowed",
    element: <Notallowed />,
  },
  {
    path: "/dashboard/",
    element: <div>Admin</div>,
    Children: [
      {
        path: "user",
        element: <div>Dashboard User</div>,
      },
    ],
  },
]);

export default router;
