import Banner from "./components/Banner"
import { ContextApi } from "./components/ContextApi"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Newarrivals from "./components/Newarrivals"
import Sales from "./components/Sales"



function App() {
 

  return (
    <>
     
      <Header/>
      <Navbar />
      <Banner/>
      <Sales/>
      <Newarrivals/>
      <ContextApi/>
     
      
    </>
  )

}

export default App
