import "./Navbar.css"
import ham from "./home/imgs/solar--hamburger-menu-bold.png"


function Navbar(){

    return(
        
        <nav className="navBar">
        <div className="title">
        <a href="https://master--b-a-l-aj-i.netlify.app/" rel="noreferrer" style={{textDecoration:'none'}}><h2>b-a-l-aj-i</h2></a>
        </div>

            <ul className="lists">
                <li className="li1">Home</li>
                <li className="li2">About</li>
                <li className="li3">Projects</li>
                <li className="li4">Contact</li>

            </ul>
            <span className="ham" >
            <span className="show"> <img src={ham}   width={40} height={40} alt="img"/> </span> 
            </span>

        </nav>
    )

}

export default Navbar