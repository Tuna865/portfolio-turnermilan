import React from "react"

import "./portfolio.css"
import "../site.css"

const Portfolio = () => {


    return (
    <div>
        <main>
        <h1>Projects:</h1>
            <section>
                <h2>Personal Site</h2>
                <p>
                    In addition to being my portfolio, this site was the first real project I created! 
                    Initially written in simple html on my personal machine, I later went back and 
                    rebuilt this site in React, and added tracking with a Github repo. 
                </p>
                <p>
                    I plan on filling this site up with projects I have completed or am currently working on,
                    but these are it for now:
                </p>
            </section>
            <section>
                <h2><a href="https://rubber-ducks-r-us.herokuapp.com/">Ducks 'R' Us</a></h2>
                <ul>
                    <li>Built using <i>JavaScript, React.js, Express.js, CSS, Node.js, </i>and<i>PostgreSQL</i></li>
                    <li>Created dummy data in the database to facilitate easier front end component creation</li>
                    <li>Established Administrator options, such as editing or deleting all registered users and all products</li>
                    <li>Designed an Administrator page that is only visible upon logging in with admin credentials</li>
                    <li>Deployed using Heroku cloud application platform</li>
                </ul>
                {/* <a href="https://rubber-ducks-r-us.herokuapp.com/"></a> */}
            </section>
            <section>
                <h2>*I plan on adding a project from TOP or the one withe Nick here*</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at earum 
                    fuga harum alias nobis, eaque optio laudantium dolor sed eligendi consequatur 
                    distinctio aperiam accusantium, architecto exercitationem perferendis minus error.
                </p>
                <p>
                    Fuga dolore impedit suscipit, vero odit, sequi in deleniti, odio ipsa facere et. 
                    Consequatur modi cum ullam adipisci unde amet qui sed odio officia ipsa omnis earum 
                    quibusdam, dolor totam?
                </p>
            </section>
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

export default Portfolio