import "./Navbar.css"
import ham from "./mdi--hamburger-menu-back.png"
function Navbar(){

    return(
        
        <nav className="navBar">
        <div className="title">
        <h2>Portfolio</h2>
        </div>

            <ul className="lists">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>

            </ul>

            <span className="ham" ><img src={ham} width={40} height={40}/></span>
        </nav>
    )

}

export default Navbar