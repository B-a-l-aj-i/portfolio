
import "./project.css"

import yt from "./assets/yt.png"
import simon from "./assets/simon.png"
import ai from "./assets/Screenshot 2024-04-23 211643.png"
import wai from "./assets/image copy.png"
import ld from "./assets/image.png"
import find from "./assets/FIND.png"

function Projects(){
    return (
        <section className="container" id="projects">
             <div>
             <center><p className="p">Projects</p></center>
             </div>

             <main className="allcards">

             <div className="card">
               <div className="cardpic">
                  <img src={yt}  alt="imgs"/>
                  <article className="cont">
                   it not the complete clone of youtube it has only single page in it and responsive todo 
                   </article>
                  </div>
                  <div className="desc">
                  <p>YOUTUBE-CLONE</p>
                  <a href="https://github.com/B-a-l-aj-i"><button className="more">visit</button></a>
                 </div>
               </div>

               <div className="card">
                  <div className="cardpic">
                  <img src={simon} alt="imgs" />
                  <article className="cont">
                   As usual a basic todo-list,you add taks and and remove them and it my first project 
                  </article>
                  </div>
                 <div className="desc">
                 <p>SIMON-GAME</p>
                 <a href="https://github.com/B-a-l-aj-i/TODO-list"><button className="more">visit</button></a>
                 </div>
               </div>


              


               <div className="card">
               <div className="cardpic">
                  <img src={ai} alt="imgs" style={{objectFit:'fill'}}/>
                  <article className="cont">
                
                  </article>
                  </div>
                  <div className="desc">
                  <p>SEARCH-AI</p>
                  <a href="https://github.com/B-a-l-aj-i"><button className="more">visit</button></a>
                 </div>
               </div>
               <div className="card">
               <div className="cardpic">
                  <img src={wai} alt="imgs"/>
                  <article className="cont">
                  
                  </article>
                  </div>
                  <div className="desc">
                  <p>WHERE-AM-I</p>
                  <a href="https://github.com/B-a-l-aj-i/Where-am-I"><button className="more">visit</button></a>
                 </div>
               </div>

               <div className="card">
               <div className="cardpic">
                  <img src={ld}  alt="imgs"/>
                  <article className="cont">
                  
                  </article>
                  </div>
                  <div className="desc">
                  <p>LUCKY-DICER</p>
                  <a href="https://github.com/B-a-l-aj-i/LuckyDicer"><button className="more">visit</button></a>
                 </div>
               </div>

               <div className="card">
                  <div className="cardpic">
                  <img src={find} alt="imgs"  style={{objectFit:'fill'}} />
                  <article className="cont">
                  </article>
                  </div>
                 <div className="desc">
                 <p>FIND-IMAGES</p>
                 <a href="https://github.com/B-a-l-aj-i/find-images"><button className="more">visit</button></a>
                 </div>
               </div>
             </main>
        </section>
    )
}

export default Projects