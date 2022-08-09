import {Outlet, Link} from "react-router-dom"
import "../site.css"

const Layout = () => {

    return(

    <div>
    <h1>Turner Milan</h1>
    <nav>
        <ul className="page-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
        </ul>
    </nav>
    <Outlet />
    <footer>
        <a href= "https://www.linkedin.com/in/turner-milan/">
            <img className= "social-links" src= "https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" alt="linkedin logo"/> 
        </a>
        <a href= "https://github.com/Tuna865">
            <img className="social-links" src= "https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github logo"/>
        </a>
        <a href= "https://open.spotify.com/user/1297311412?si=245311b0f2154fca">
            <img className="social-links" src= "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="spotify logo"/>
        </a>
      </footer>
    </div>
    )
}

export default Layout