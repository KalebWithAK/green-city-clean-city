import { DonateButton } from "../components/cta-buttons"
import Slides from "../components/slides"
import "../css/home.css"

export default function Home() {
    return (
        <main>
            <article className="hero">
                <div className="flex">
                    <span>Welcome to</span>
                    <span>Green City</span>
                    <span>Clean City!</span>
                </div>

                <span>Veterans cleaning America</span>

                <DonateButton />
            </article>

            <figure>
                <iframe className="youtube-video" src="https://www.youtube-nocookie.com/embed/O1iXh-A21Wo?si=KEZQL13WpjEnMlCp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen"></iframe>
            </figure>

            <Slides />
        </main>
    )
}