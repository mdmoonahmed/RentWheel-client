
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
               path: '/',
               element: <Home></Home>,
               loader: ()=> fetch('http://localhost:4000/cars')
            },
            {
               
            }
        ]
    }
])
