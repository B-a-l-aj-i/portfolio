
import "./project.css"

import todo from "./assets/todo.png"
import yt from "./assets/yt.png"
import ai from "./assets/Screenshot 2024-04-23 211643.png"
import wai from "./assets/image copy.png"
import ld from "./assets/image.png"

function Projects(){
    return (
        <section className="container" id="projects">
             <div>
             <center><p className="p">Projects</p></center>
             </div>
             <main className="allcards">

               <div className="card">
                  <div className="cardpic">
                  <img src={todo} />
                  </div>
                 <div className="desc">
                 <p>TODO-LIST</p>
                 <button className="more">more</button>
                 </div>
               </div>


               <div className="card">
               <div className="cardpic">
                  <img src={yt} />
                  </div>
                  <div className="desc">
                  <p>YOUTUBE-CLONE</p>
                 <button className="more">more</button>

                 </div>

               </div>
               <div className="card">
               <div className="cardpic">
                  <img src={ai}/>
                  </div>
                  <div className="desc">
                  <p>SEARCH-AI</p>
                 <button className="more">more</button>

                 </div>
               </div>
               <div className="card">
               <div className="cardpic">
                  <img src={wai}/>
                  </div>
                  <div className="desc">
                  <p>WHERE-AM-I</p>
                 <button className="more">more</button>
                 </div>
               </div>
               <div className="card">
               <div className="cardpic">
                  <img src={ld}/>
                  </div>
                  <div className="desc">
                  <p>LUCKY-DICER</p>
                 <button className="more">more</button>

                 </div>
               </div>
             </main>
        </section>
    )
}

export default Projects