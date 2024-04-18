import github from "./jam--github.png"
import linkedin from "./simple-icons--linkedin.png"
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
                <a href="https://github.com/B-a-l-aj-i"><img src={linkedin} alt="linkedin" width={35} height={35} /></a>
                <button  className="btn"> Resume </button>
            </div>
            </div>

            </div>
     

</section>

<section className="techstack">
<p className="heading">TECH_STACK </p>
</section>

</main>
    )
}

export default Home