import github from "./jam--github.png"
import linkedin from "./simple-icons--linkedin.png"

import bootstrap from "./imgs/devicon--bootstrap-wordmark.png"
import css from "./imgs/devicon--css3-wordmark.png"
import html from "./imgs/logos--html-5.png"
import java from "./imgs/devicon--java-wordmark.png"
import sql from "./imgs/devicon--postgresql-wordmark.png"
import react from "./imgs/devicon--react-wordmark.png"
import figma from "./imgs/logos--figma.png"
import git from "./imgs/logos--git.png"
import js from "./imgs/vscode-icons--file-type-js-official.png"



 import "./Home.css"


function Home(){
    return(
     <main className="all">   
        <section className="info">

            <div className="name">
                <h1><span style={{fontSize:'20px',fontWeight:'normal'}}>Hey,i'm </span>  Balaji</h1>
                <h2 >junior<span>FRONTEND</span>developer</h2>
            </div>

            <div className="detail"> 

            <div className="links ">
              <div className="imgs">

                <a href="https://github.com/B-a-l-aj-i" target="_blank"  rel="noreferrer"><img src={github} alt="gitHub" width={35} height={35} /></a>
                <a href="https://www.linkedin.com/in/balaji-m-400bb4249/" target="_blank"  rel="noreferrer"><img src={linkedin} alt="linkedin" width={35} height={35} /></a>
                <a href=".\imgs\resume.pdf" download="resume.pdf" > <button  className="btn"> Resume </button></a> 
            </div>
            </div>

            </div>
     

</section>

<section className="techstack">
<p className="heading">TECH_STACK </p>

<main className="techimages">
    <img src={html}  width={70} heigth={50}  alt="imgs" />
    <img src={css} width={70} heigth={50}  alt="imgs"/>
    <img src={bootstrap} width={70} heigth={50}  alt="imgs"/>
    <img src={js} width={70} heigth={50}  alt="imgs"/>
    <img src={react} width={70} heigth={50}  alt="imgs"/>
    <img src={java} width={70} heigth={50} alt="imgs" />
    <img src={sql} width={70} heigth={50}  alt="imgs"/>
    <img src={figma} width={70} heigth={50} alt="imgs" />
    <img src={git} width={70} heigth={50} alt="imgs" />
    


</main>
</section>

</main>
    )
}

export default Home