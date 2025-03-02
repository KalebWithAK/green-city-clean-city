import DonateButton from "../components/donate-button"
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

            <iframe className="youtube-video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/O1iXh-A21Wo?si=KEZQL13WpjEnMlCp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </main>
    )
}