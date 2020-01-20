import React from 'react';
import './Header.css';

const Header = props => {

    const { isLoading, category } = props;

    const onSideNav = e => {
        props.onSideNav(true);
    }

    return (
        <div className='header-wrapper'>
            <div className='ico-sideNav'>
                <div onClick={onSideNav} className='ico'></div>
            </div>
            <div className='logo'></div>
            {isLoading ? <div className='spinner-wrapper'><span className='spinner' /></div> : ''}
            <span></span>
            <div className='category-ico'>{category}</div>
        </div>
    )
}

export default Header;