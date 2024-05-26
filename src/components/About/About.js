
import pic from "./WhatsApp Image 2024-04-13 at 19.28.41_0aa2cb96.jpg"
import "./about.css"
function About(){

    if(window.innerWidth>768){
        window.addEventListener('scroll',()=>{
        // console.log(window.innerHeight);
    
        // var revel=document.querySelectorAll(".card")
        // console.log(revel);
        let cont=document.querySelector(".content")
        let pdp=document.querySelector(".pic")

    // console.log(head);
        for(let i=0;i<1;i++){
          let windowHeight=window.innerHeight;
    
          let revelTop=cont.getBoundingClientRect().top;
          let revelpoint=10;
    
          if(revelTop< windowHeight-revelpoint){
            cont.classList.add('coad')
            pdp.classList.add('pani')
          }else{
            cont.classList.remove('coad')

            pdp.classList.remove('pani')


          }
        }
      })
      }
    return(
        <section id="ab" className="abt">
            <center><p className="pa" >About</p></center>
            <div id="about">
            <div className="content">
            <p>I am an aspiring Frontend developer with a passion for creating user-friendly websites and I am
            quite familiar with some web technologies I am looking for an internship where I can leverage my
            skills and implement my knowledge in the real world. I aim to learn from experienced
            professionals and gain hands-on experience in web development
            </p>
            </div>
            <div className="dp">
                <img className="pic" src={pic} alt="pic"/>
            </div>
            </div>
        </section>
    )
}

export default About