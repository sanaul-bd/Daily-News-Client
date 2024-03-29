
import {RouterProvider} from "react-router-dom";
import './App.css'
import { routes } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <RouterProvider router={routes}>
      
    </RouterProvider>
    <Toaster></Toaster>
    </>
  )
}

export default App
