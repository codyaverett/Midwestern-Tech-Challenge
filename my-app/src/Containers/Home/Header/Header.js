import React from 'react';
import './Header.css';
import Logo from '../../../Components/Shared/Logo/Logo';



const Header = ({tag, link}) => {
    return (
        <div className='header-sect'>
           <Logo />
           <a id='Contact-tag' href={link}>{tag}</a>     
        </div>
    )
}

export default Header
