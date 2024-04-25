import github from "./jam--github.png"
import linkedin from "./simple-icons--linkedin.png"

import bootstrap from "./imgs/simple-icons--bootstrap.png"
import css from "./imgs/simple-icons--css3.png"
import html from "./imgs/uiw--html5.png"
import java from "./imgs/devicon-plain--java.png"
import sql from "./imgs/simple-icons--postgresql.png"
import react from "./imgs/ri--reactjs-fill.png"
import figma from "./imgs/logos--figma.png"
import git from "./imgs/cib--git.png"
import js from "./imgs/fa-brands--js.png"



 import "./Home.css"


function Home(){
    return(
     <main  id="home" className="all">   
        <section className="info">

            <div className="name">
                <h1><span style={{fontSize:'20px',fontWeight:'normal'}}>Hey,i'm </span>  Balaji</h1>
                <h2 >junior<strong>Frontend</strong>developer</h2>
            </div>

            <div className="detail"> 

            <div className="links ">
              <div className="imgs">

                <a href="https://github.com/B-a-l-aj-i" target="_blank"  rel="noreferrer"><img src={github} alt="gitHub" width={40} height={40} /></a>
                <a href="resume.pdf" download="resume.pdf" > <button  className="btn"> Resume </button></a> 
                <a href="https://www.linkedin.com/in/balaji-m-400bb4249/" target="_blank"  rel="noreferrer"><img src={linkedin} alt="linkedin" width={35} height={35} /></a>
            </div>
            </div>

            </div>
     

</section>

<section className="techstack">
<center><p className="heading">Tech_Stack </p> </center>
<main className="techimages">
<figure  className="logos">

    <img src={html}   alt="imgs" />
    <figcaption>html</figcaption>
</figure>
<figure className="logos">

    <img src={css}  alt="imgs"/>
    <figcaption>css</figcaption>
</figure>
<figure className="logos">
    
    <img src={bootstrap}  alt="imgs"/>
    <figcaption>bootstrap</figcaption>
</figure>

<figure className="logos">
    
    <img src={js}  alt="imgs"/>
    <figcaption>javascript</figcaption>
</figure>

<figure className="logos">
    
    <img src={react}  alt="imgs"/>
    <figcaption>react</figcaption>
</figure>

<figure className="logos">
    
    <img src={java} alt="imgs" />
    <figcaption>java</figcaption>
</figure>

<figure className="logos">
    
    <img src={sql}  alt="imgs"/>
    <figcaption>postgresql</figcaption>
</figure>

<figure className="logos">
    
    <img src={figma} alt="imgs" width={3} />
    <figcaption>figma</figcaption>
</figure>

<figure className="logos"> 
    
    <img src={git} alt="imgs" />
    <figcaption>git</figcaption>
</figure>
    


</main>
</section>

</main>
    )
}

export default Home