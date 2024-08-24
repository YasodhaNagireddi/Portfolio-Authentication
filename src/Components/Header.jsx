import React from 'react';
import Profile_logo from '../assets/Profile_logo.png';

const Header = () => {
    return (
        <div className='h-[10vh] px-20 py-2 text-xl'>
            <a href='/'><img src={Profile_logo} alt='Profile Logo' className='w-[250px] h-[150px]' /></a>
        </div>
    );
}

export default Header;
