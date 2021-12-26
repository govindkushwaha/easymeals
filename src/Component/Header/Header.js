import React from 'react';
import './Header-module.css';
import lensLogo from '../../lens-icons.jpg';
import bookmarkLogo from '../../bookmark-icons.png';
import foodBowlLogo from '../../food-bowl-icon.jpg';
import loginLogo from '../../login-icons.png';
import registrationLogo from '../../registered-icon.png';
import socalMediaLogo from '../../social-media-icons.png';
import brandLogo from '../../easyMealLogo.jpg';


const Header = () => {

    return (<>
    <div className="header-main">
        <div className="head">
            <div className="lefts">
                <span>Forum</span>
                <span> Categories</span>
                <span> Books</span>
                <span> Recipe Index</span>
                <span> Popular</span>
            </div>
            <div className="right">
                <span className="register"> <img alt='register Logo' src={registrationLogo} />   REGISTER</span>
                <span className="login"> <img alt='login Logo' src={loginLogo} />  LOGIN</span>
            </div>
        </div>
        <div className="header">
            <div className="logoName"> <img alt='logo' src={brandLogo} /></div>
            <div className="Search">
                <input type="text" className="search-box" placeholder="Search recipes..." />
                <span className="lensLogo"> <img alt='lens Logo' src={lensLogo} /></span>
            </div>
            <div className="favourites"> <img alt='lens Logo' src={bookmarkLogo} /> Favourites </div>
            <div className="cart"> <img alt='lens Logo' src={foodBowlLogo} />  Cart (0)</div>
        </div>

        <div className="novabar">
            <div className="left">
                <span>HOME</span>
                <span> CATEGOREES</span>
                <span> RECIPES</span>
                <span> CONTACT</span>
                <span> AOBUT</span>
            </div>
            <div className="right">
                <span className="socialMedia"> <img alt='media Logo' src={socalMediaLogo} /></span>
            </div>
        </div>
        </div>

    </>)
}

export default Header
