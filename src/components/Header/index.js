import React from 'react'
import './styles.css'

function Header({black}) {
    return (
        <header className={black ? 'header_black' : '' } >
            <div className='header_logo'>
                <a href='#'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png' alt='Netflix' />
                </a>
            </div>
            <div className='header_user'>
                <a href='#'>
                    <img src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt='User' />
                </a>
            </div>
        </header>
    )
}

export default Header
