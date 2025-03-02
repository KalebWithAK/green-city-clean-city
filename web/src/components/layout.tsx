import { ReactNode } from "react"
import DonateButton from "./donate-button"
import Profile from "./profile"

type Props = { children: ReactNode }

export default function Layout({children}: Props) {
    return (
        <body>
            <header>
                <h1>Green City Clean City</h1>
                <DonateButton />
                <nav className="nav">
                    <a href="#">Home</a>
                    <a href="#volunteer">Volunteer</a>
                    <a href="#shop">Shop</a>
                    <a href="#blog">Blog</a>
                </nav>
                <hr />
                <span className="social-media">
                    <a href="https://youtu.be/O1iXh-A21Wo?si=4bEJJF3VuFpD9aBx" target="_blank"><img src="https://imgs.search.brave.com/t-OO1yLHMqWFFM5gimTqLdlq2OY4PcNxMtz8FF0W2HY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2ZjL1lvdVR1YmVf/cGxheV9idXR0b25f/c3F1YXJlXygyMDEz/LTIwMTcpLnN2Zw" alt="youtube link" /></a>
                    <a href="" target="_blank"><img src="https://imgs.search.brave.com/bbk0PGWgTH-0aeiLkZm-qGBkpMRb1NbsNLTOsC3kPiQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzc2YmU5MjFh/Y2U1ODE5MDE4Yjdm/ZmViNDMwNmZhMDVm/ZjE4ZjQ0MWI5YjVl/NDI4ZTExZGY4ZWFj/OGM1M2ZkOC93d3cu/dGlrdG9rLmNvbS8" alt="tiktok link" /></a>
                    <a href="" target="_blank"><img src="https://imgs.search.brave.com/kgdtgqUZQdNYzMKhbVXC5vthlFLPMJ0IOJAdFjEIRuk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2RiYmJiZDA4/NTBkNWQ0ZmQ3NDE5/OGUxOGI4NzE5ZDI0/Zjk0M2ExMDkzZmJm/ODA0MmJiMzkwZjMy/ZDM4YWVkOS93d3cu/aW5zdGFncmFtLmNv/bS8" alt="instagram link" /></a>
                </span>
                <div>
                    <Profile />
                </div>
            </header>

            { children }

            <footer>
                <p>©2023 by Invest Into Our Youth.</p>
            </footer>
        </body>
    )
}