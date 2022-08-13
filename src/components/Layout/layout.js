import {Outlet, Link} from "react-router-dom"
import "./layout.scss"

const Layout = () => {

    return(
    <div>
    <nav>
        <Link className="router-links" to="/">Home</Link>
        <Link className="router-links" to="/about">About</Link>
        <Link className="router-links" to="/portfolio">Portfolio</Link>
    </nav>
    <Outlet />
    <footer>
        <a href= "https://www.linkedin.com/in/turner-milan/" target="_blank" rel="noopener noreferrer">
            <img className= "social-links" src= "https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" alt="linkedin logo"/> 
        </a>
        <a href= "https://github.com/Tuna865" target="_blank" rel="noopener noreferrer">
            <img className="social-links" src= "https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github logo"/>
        </a>
        <a href= "https://open.spotify.com/user/1297311412?si=245311b0f2154fca" target="_blank" rel="noopener noreferrer">
            <img className="social-links" src= "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="spotify logo"/>
        </a>
        <address>
        turnermilan@gmail.com<br/>
        865-323-7511
        </address>
      </footer>
    </div>
    )
}

export default Layout