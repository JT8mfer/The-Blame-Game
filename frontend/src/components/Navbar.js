import './Navbar.css';
import Pad from ''
import React from 'react'

function Navbar() {
    return (
        
        <nav className="navWrap">
            <div className='logoWrap'>
                <img className='ourLogo' src={Pad} alt="BlameGame"/>
            </div>


           {/* <ul className="sidebar">      
                <li><Topics/><span className="words">Home</span></li>
                <li><Reviews/><span className="words">Explore</span></li>
                <li><Popular/><span className="words">Notification</span></li>
                <li><Blogs/><span className="words">Messages</span></li>
                <li><Forums/><span className="words">Bookmarks</span></li>
                <li><Videos/> <span className="words">Lists</span></li> */}
                
                
            {/* </ul>  */}
        </nav>
    )
}

export default Navbar;
