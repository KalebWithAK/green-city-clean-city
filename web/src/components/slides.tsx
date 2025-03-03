import { ReactNode, useState } from "react";
import { JoinButton } from "./cta-buttons";

export default function Slides() {
    const [current, setCurrent] = useState(0)

    const slides = [
        {
            elem: <h2>By Finding Ways to Work Together</h2>,
            img: "https://images.pexels.com/photos/9034682/pexels-photo-9034682.jpeg"
                
        },
        {
            elem: <h2>Through the power of community involvement</h2>,
            img: "https://images.pexels.com/photos/9543414/pexels-photo-9543414.jpeg",
        },
        {
            elem: <p>Restoring communities one piece of trash at a time. Join us in our mission to make the world a cleaner and better place. Together, we can make a difference create a brighter future for generations to come.</p>,
            img: "https://images.pexels.com/photos/9543409/pexels-photo-9543409.jpeg"        
        },
    ] 

    const slide = slides[current]
    const nextSlide = () => setCurrent(current + 1)
    const prevSlide = () => setCurrent(current - 1)

    return (
        <article>
            <button className="slideControl" onClick={prevSlide}>&lsaquo;</button>
            <Slide img={slide.img} elem={slide.elem} nextSlide={nextSlide} prevSlide={prevSlide} />
            <button className="slideControl" onClick={nextSlide}>&rsaquo;</button>
        </article>
    )
}

type SlideProps = {
    img: string,
    elem: ReactNode
    prevSlide: () => void,
    nextSlide: () => void
}

function Slide({ img, elem } : SlideProps) {
    return (
        <div className="slide" style={{ backgroundImage: `url(${img})`,  }}>
            { elem }
            <JoinButton />
            
        </div>
    )
}