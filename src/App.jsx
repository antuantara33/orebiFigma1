
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Error from "./pages/Error";
import Shop from "./pages/Shop";
let router = createBrowserRouter(createRoutesFromChildren(
<>
 <Route  element ={<Layout/>}>
 <Route path="/" element={<Home/>}></Route>
 <Route path="/product" element={<Shop/>}></Route>
  <Route path="/about" element={<About/>}></Route>
 </Route>
  <Route path="*" element={<Error/>}></Route>
</>

))


function App() {
 

  return (
    <>
     
    <RouterProvider router={router}></RouterProvider>
     
      
    </>
  )

}

export default App
