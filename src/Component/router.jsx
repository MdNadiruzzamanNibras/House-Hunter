import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import SignUp from "../page/login/SignUp";
import Login from "../page/login/login";
import OwnerDashboar from "../page/Owner/OwnerDashboar";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <App />,
    children: [
            {
                index:true,
                element: <Home />
        },
        {
            path: "/owner",
            element: <OwnerDashboar/>
        },
        {
            path: "/signup",
            element: <SignUp/>
        },
        {
            path: "/login",
            element: <Login/>
        }
            
        ]
  },
]);
