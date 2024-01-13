import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News/News";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Rregister/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Terms from "../../Pages/Others/Terms/Terms";
import Profile from "../../Pages/Others/Profile/Profile";
import MyLocation from "../../Components/GoogleMap/MyLocation";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('https://daily-news-server-sanaul-bd.vercel.app/news')
            },
            {
                path: '/category/:id',
                // loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                loader: ({params}) => fetch(`https://daily-news-server-sanaul-bd.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params})=> fetch(`https://daily-news-server-sanaul-bd.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/googlemap',
                element: <MyLocation></MyLocation>
            }
        ]
    }
])