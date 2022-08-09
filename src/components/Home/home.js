import React from "react"

import "./home.css"
import "../site.css"

const Home = () => {
    

    return (
    <div>
        <main>
            <h1>Fanatic, Discoverer, Builder.</h1>
            <h2>Seeking a career that will be rewarding, challenging, 
                and <a className= "gotcha"href= "https://www.youtube.com/watch?v=dQw4w9WgXcQ">entertaining</a> for years to come.
            </h2>
                <h3 className="BattleBorn">"You never shine if you never burn"
                
                -Brandon Flowers of <i>The Killers</i>
            </h3>
        </main>
        <footer>
            <a href= "https://www.linkedin.com/in/turner-milan/">
                <img className= "social-links" src= "Images/LinkedInLogo.png" alt="linkedin logo"/> 
            </a>
            <a href= "https://github.com/Tuna865">
                <img className="social-links" src= "Images/GitHub-Mark.png" alt="github logo"/>
            </a>
            <a href= "https://open.spotify.com/user/1297311412?si=245311b0f2154fca">
                <img className="social-links" src= "Images/SpotifyLogo.png" alt="spotify logo"/>
            </a>
        </footer>
    </div>
    )
}

export default Home