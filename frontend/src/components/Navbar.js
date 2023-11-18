import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'><ul>
           
            <li><Link className='link'  to="/">Upload File</Link></li>
            <li><Link className='link'  to="/allFiles">All Files</Link></li>
           
        </ul></div>
    )
}

export default Navbar