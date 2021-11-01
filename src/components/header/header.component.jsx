import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';


const Header = () => (
    <div className='header'>

        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <MenuIcon className='menu-icon' style={{ fontSize: 80, cursor: 'pointer' }} />


            <div className='options'>
                <Link className='option' to='/music'>
                    MUSIC
                </Link>

                <Link className='option' to='/shop'>
                    SHOP
                </Link>

                <Link className='option' to='/photos'>
                    PHOTOS
                </Link>

                <Link className='option' to='/videos'>
                    VIDEOS
                </Link>

                <Link className='option' to='/about'>
                    ABOUT
                </Link>

                <Link className='option' to='/press'>
                    PRESS
                </Link>

                <Link className='option' to='/contact'>
                    CONTACT
                </Link>

            </div>

    </div>
);

export default Header;
