import React, { useState } from "react";
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';

export default function App() {
    const [sidebar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sidebar)

    const homeScroll = () => Scroll.animateScroll.scrollToBottom()

    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <i className="fa fa-bars" aria-hidden="true" onClick={showSideBar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar} >
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <i class="fa fa-times" aria-hidden="true" />
                        </Link>
                    </li>
                    <li className='navbar-toggle'>
                        <Link to='/' className='menu-items' onClick={homeScroll}>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className='navbar-toggle'>
                        <Link to='/' className='menu-items'>
                            <span>About</span>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    );
}
