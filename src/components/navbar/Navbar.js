import "./Navbar.css"
import ham from "./charm--menu-hamburger.png"
function Navbar(){

    return(
        
        <nav className="navBar">
        <div className="title">
        <h2>Portfolio</h2>
        </div>

            <ul className="lists">
                <li className="li1">Home</li>
                <li className="li2">About</li>
                <li className="li3">Projects</li>
                <li className="li4">Contact</li>
            </ul>
            <span className="ham" ><img src={ham} width={40} height={40} alt="img"/></span>
        </nav>
    )

}

export default Navbar