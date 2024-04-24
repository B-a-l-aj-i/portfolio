
import "./project.css"

import todo from "./assets/todo.png"
import yt from "./assets/yt.png"
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
                  <img src={todo} alt="imgs" />
                  </div>
                 <div className="desc">
                 <p>TODO-LIST</p>
                 <button className="more">more</button>
                 </div>
               </div>


               <div className="card">
               <div className="cardpic">
                  <img src={yt}  alt="imgs"/>
                  </div>
                  <div className="desc">
                  <p>YOUTUBE-CLONE</p>
                 <button className="more">more</button>

                 </div>

               </div>
               <div className="card">
               <div className="cardpic">
                  <img src={ai} alt="imgs" style={{objectFit:'fill'}}/>
                  </div>
                  <div className="desc">
                  <p>SEARCH-AI</p>
                 <button className="more">more</button>

                 </div>
               </div>
               <div className="card">
               <div className="cardpic">
                  <img src={wai} alt="imgs"/>
                  </div>
                  <div className="desc">
                  <p>WHERE-AM-I</p>
                 <button className="more">more</button>
                 </div>
               </div>

               <div className="card">
               <div className="cardpic">
                  <img src={ld}  alt="imgs"/>
                  </div>
                  <div className="desc">
                  <p>LUCKY-DICER</p>
                 <button className="more">more</button>

                 </div>
               </div>

               <div className="card">
                  <div className="cardpic">
                  <img src={find} alt="imgs"  style={{objectFit:'fill'}} />
                  </div>
                 <div className="desc">
                 <p>FIND-IMAGES</p>
                 <button className="more">more</button>
                 </div>
               </div>
             </main>
        </section>
    )
}

export default Projects