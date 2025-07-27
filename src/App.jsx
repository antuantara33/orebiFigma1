import Banner from "./components/Banner"
import Bestsell from "./components/Bestsell"
import { ContextApi } from "./components/ContextApi"
import Footer from "./components/Footer"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Newarrivals from "./components/Newarrivals"
import Phone from "./components/Phone"
import Sales from "./components/Sales"
import Special from "./components/Special"



function App() {
 

  return (
    <>
     
      <Header/>
      <Navbar />
      <Banner/>
      <Sales/>
      <Newarrivals/>
      <ContextApi/>
      <Bestsell/>
      <Phone/>
      <Special/>
      <Footer/>
     
      
    </>
  )

}

export default App
