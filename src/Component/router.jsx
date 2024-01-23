import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import SignUp from "../page/login/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <App />,
    children: [
            {
                path: "/",
                element: <Home />
        },
        {
            path: "/signup",
            element: <SignUp/>
        }
            
        ]
  },
]);
