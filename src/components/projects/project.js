import React, { useState, useEffect, useRef } from 'react';
import yt from "./assets/yt.png";
import simon from "./assets/SIMON2.png";
import ai from "./assets/Screenshot 2024-04-23 211643.png";
import wai from "./assets/image copy.png";
import ld from "./assets/image.png";
import find from "./assets/FIND.png";
import "./project.css";

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const cards = [
        { src: yt, desc: "YOUTUBE-CLONE", link: "https://github.com/B-a-l-aj-i/YOUTUBE-CLONE", text: "it not the complete clone of youtube it has only single page in it and responsive todo" },
        { src: simon, desc: "SIMON-GAME", link: "https://github.com/B-a-l-aj-i/SIMON-GAME", text: "As usual a basic todo-list,you add tasks and remove them and it my first project" },
        { src: ai, desc: "SEARCH-AI", link: "https://github.com/B-a-l-aj-i", text: "" },
        { src: wai, desc: "WHERE-AM-I", link: "https://github.com/B-a-l-aj-i/Where-am-I", text: "" },
        { src: ld, desc: "LUCKY-DICER", link: "https://github.com/B-a-l-aj-i/LuckyDicer", text: "" },
        { src: find, desc: "FIND-IMAGES", link: "https://github.com/B-a-l-aj-i/find-images", text: "" },
    ];

    const handleScroll = () => {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.clientWidth;
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(index);
    };

    useEffect(() => {
        const ref = scrollRef.current;
        ref.addEventListener('scroll', handleScroll);
        return () => ref.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="container" id="projects">
            <div>
                <center><p className="p ls">Projects</p></center>
            </div>
            <div className="allcards-container">
                <div className="allcards" ref={scrollRef}>
                    {cards.map((card, index) => (
                        <div className="card" key={index}>
                            <div className="cardpic">
                                <img src={card.src} alt="imgs" />
                                <article className="cont">{card.text}</article>
                            </div>
                            <div className="desc">
                                <p>{card.desc}</p>
                                <a href={card.link}><button className="more">visit</button></a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="dots">
                    {cards.map((_, index) => (
                        <span key={index} className={`dot ${currentIndex === index ? 'active' : ''}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
