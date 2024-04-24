import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Ani from "./components/animation/Ani"
import About from "./components/About/About"
import Projects from "./components/projects/project"
import Contact from "./components/contact/contact"
import { Fragment } from "react"
function App(){


    return (

        <Fragment>
       <Navbar />
       <Home />
       <Ani/>
       <About />
       <Projects />
       <Contact/>
        </Fragment>
    )
}

export default App