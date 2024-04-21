
import pic from "./WhatsApp Image 2024-04-13 at 19.28.41_0aa2cb96.jpg"
import "./about.css"
function About(){

    return(
        <div id="about" className="abt">
            <article className="content">
            <h3>About</h3>    
            <p>I am an aspiring Frontend developer with a passion for creating user-friendly websites and I am
            quite familiar with some web technologies I am looking for an internship where I can leverage my
            skills and implement my knowledge in the real world. I aim to learn from experienced
            professionals and gain hands-on experience in web development.
            </p>
            </article>
            <aside className="dp">
                <img className="pic" src={pic} alt="pic"/>
            </aside>
        </div>
    )
}

export default About