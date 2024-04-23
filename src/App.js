import Navbar from "./components/navbar/Navbar"
import Home from "./components/navbar/home/Home"
import Ani from "./components/navbar/Ani"
import About from "./components/navbar/About/About"
import Projects from "./components/navbar/projects/project"
import { Fragment } from "react"
function App(){


    return (

        <Fragment>
       <Navbar />
       <Home />
       <Ani/>
       <About />
       <Projects />
        </Fragment>
    )
}

export default App