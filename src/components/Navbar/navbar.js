import React from "react"

import "./navbar.css"
import "../site.css"

const navItems = [
    {title: 'Home', url: '/', className: 'navbar-links'},
    {title: 'About', url: '/about', className: 'navbar-links'},
    {title: 'Portfolio', url: '/portfolio', className: 'navbar-links'}
]

const Navbar = () => {
    
    return(
        <nav>
            <h1>Turner Milan</h1>
            <div>
                {navItems.map((item, index) => {
                    return(
                        <ul>
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        </ul>
                    )
                })}
            </div>
        </nav>
            )
}

export default Navbar