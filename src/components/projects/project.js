import yt from "./assets/yt.png";
import simon from "./assets/SIMON2.png";
import ai from "./assets/Screenshot 2024-04-23 211643.png";
import wai from "./assets/image copy.png";
import ld from "./assets/image.png";
import find from "./assets/FIND.png";
import { useEffect } from "react";

import "./project.css";

function Projects() {
  useEffect(() => {
    console.log("useEffect called");
      const allcards= document.querySelector('.allcards');
      const dots = document.querySelectorAll('.dot');
      console.log("allcardsContainer:", allcards);
      console.log("dots:", dots);
      
      allcards.addEventListener('scroll', () => {
        const scrollLeft = Math.floor(allcards.scrollLeft);
        const cardWidth = Math.floor(allcards.clientWidth);
        const index = Math.floor(scrollLeft / cardWidth);
        dots.forEach((dot, i) => {
          if (i==index+1) {
            dot.classList.add('active');
          } else {
                    dot.classList.remove('active');
                  }
                });
              });
          }, []);

          
          
          if (window.innerWidth > 768) {
            window.addEventListener('scroll', () => {
            var revel = document.querySelectorAll(".card");
            var rev = document.querySelector(".container");
            let head = document.querySelector(".p");
            for (let i = 0; i < revel.length; i++) {
                let windowHeight = window.innerHeight;
                let revelTop = rev.getBoundingClientRect().top;
                let revelpoint = 20;

                if (revelTop < windowHeight - revelpoint) {
                    head.classList.add('ls');
                    revel[i].classList.add('add' + i);
                } else {
                    head.classList.remove('ls');
                    revel[i].classList.remove('add' + i);
                }
            }
        });
    }

    return (
        <section className="container" id="projects">
            <div>
                <center><p className="p ls">Projects</p></center>
            </div>

            <div className="allcards-container">
                <div className="allcards">
                    <div className="card">
                        <div className="cardpic">
                            <img src={yt} alt="imgs" />
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
                            <img src={simon} alt="imgs" style={{ objectFit: 'fill' }} />
                            <article className="cont">
                                As usual a basic todo-list, you add tasks and remove them and it is my first project
                            </article>
                        </div>
                        <div className="desc">
                            <p>SIMON-GAME</p>
                            <a href="https://github.com/B-a-l-aj-i/SIMON-GAME"><button className="more">visit</button></a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardpic">
                            <img src={ai} alt="imgs" style={{ objectFit: 'fill' }} />
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
                            <img src={wai} alt="imgs" />
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
                            <img src={ld} alt="imgs" />
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
                            <img src={find} alt="imgs" style={{ objectFit: 'fill' }} />
                            <article className="cont">
                            </article>
                        </div>
                        <div className="desc">
                            <p>FIND-IMAGES</p>
                            <a href="https://github.com/B-a-l-aj-i/find-images"><button className="more">visit</button></a>
                        </div>
                    </div>
                </div>

                <div className="dots-container">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
