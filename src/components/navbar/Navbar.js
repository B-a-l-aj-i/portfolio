import "./Navbar.css"
import ham from "./charm--menu-hamburger.png"

function Navbar(){

    return(
        
        <nav  className="navBar">
        <div className="title">
        <a href="https://master--b-a-l-aj-i.netlify.app/" rel="noreferrer" style={{textDecoration:'none'}}><p>b-a-l-aj-i</p></a>
        </div>

            <ul className="lists">
               <a href="#home"> <li className="li1">Home</li></a>
               <a href="#ab"> <li className="li2">About</li></a>
               <a href="#projects"> <li className="li3">Projects</li></a>
              <a href="#contact">  <li className="li4">Contact</li></a>

            </ul>
            <span className="ham" >
            <span className="show"> <img src={ham}   width={40} height={40} alt="img"/> </span> 
            </span>

        </nav>
    )

}

export default Navbar