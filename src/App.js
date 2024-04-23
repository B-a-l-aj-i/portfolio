import Navbar from "./components/navbar/Navbar"
import Home from "./components/navbar/home/Home"
import Ani from "./components/navbar/Ani"
import About from "./components/navbar/About/About"
import { Fragment } from "react"
function App(){


    return (

        <Fragment>
       <Navbar />
       <Home />
       <Ani/>
       <About />
        </Fragment>
    )
}

export default App