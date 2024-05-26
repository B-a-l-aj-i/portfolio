

import yt from "./assets/yt.png"
import simon from "./assets/SIMON2.png"
import ai from "./assets/Screenshot 2024-04-23 211643.png"
import wai from "./assets/image copy.png"
import ld from "./assets/image.png"
import find from "./assets/FIND.png"

import "./project.css"
function Projects(){

  if(window.innerWidth>768){
    window.addEventListener('scroll',()=>{
    // console.log(window.innerHeight);

    var revel=document.querySelectorAll(".card")
    // console.log(revel);
    let head=document.querySelector(".p")
// console.log(head);
    for(let i=0;i<revel.length;i++){
      let windowHeight=window.innerHeight;

      let revelTop=revel[i].getBoundingClientRect().top;
      let revelpoint=10;

      if(revelTop< windowHeight-revelpoint){
        head.classList.add('ls')
        revel[i].classList.add('add')
      }else{
        head.classList.remove('ls')
        revel[i].classList.remove('add')

      }
    }
  })
  }

    return (
        <section className="container" id="projects">
             <div>
             <center><p className="p ls">Projects</p></center>
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
                  <a href="https://github.com/B-a-l-aj-i/YOUTUBE-CLONE"><button className="more">visit</button></a>
                 </div>
               </div>

               <div className="card">
                  <div className="cardpic">
                  <img src={simon} alt="imgs"  style={{objectFit:'fill'}}/>
                  <article className="cont">
                   As usual a basic todo-list,you add taks and and remove them and it my first project 
                  </article>
                  </div>
                 <div className="desc">
                 <p>SIMON-GAME</p>
                 <a href="https://github.com/B-a-l-aj-i/SIMON-GAME"><button className="more">visit</button></a>
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