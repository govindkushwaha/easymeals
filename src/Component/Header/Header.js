import React, {useState} from 'react';
import './Header-module.css';
import lensLogo from '../../StaticFiles/lens-icons.jpg';
import bookmarkLogo from '../../StaticFiles/bookmark-icons.png';
import foodBowlLogo from '../../StaticFiles/food-bowl-icon.jpg';
import loginLogo from '../../StaticFiles/login-icons.png';
import registrationLogo from '../../StaticFiles/registered-icon.png';
import socalMediaLogo from '../../StaticFiles/social-media-icons.png';
import brandLogo from '../../StaticFiles/easyMealLogo.jpg';
import dummyData from '../../StaticFiles/data';

const Header = (props) => {
const {setProductData,setFlagForSearch} = props;
const [searchItem, setSearchItem] = useState('');

const serchFilter = () =>{
 const data =   dummyData.filter((val) => {
        if (searchItem === "") {
            setFlagForSearch(false);
            return dummyData;
        }
        else if ((val.meal.toLowerCase().includes(searchItem.toLowerCase())) 
        || (val.dietary.toLowerCase().includes(searchItem.toLowerCase())) 
        || (val.season.toLowerCase().includes(searchItem.toLowerCase()))  ) {
            setFlagForSearch(true);
            return dummyData;
        }
        else {
            setFlagForSearch(false);
            return "";
        }
    })
    setProductData(data);

}
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
                <input type="text" className="search-box" value={searchItem} onChange={e => { setSearchItem(e.target.value)}} placeholder="Search recipes..." />
                <span className="lensLogo" onClick={ serchFilter }> <img alt='lens Logo' src={lensLogo} /></span>
            </div>
            <div className="favourites"> <img alt='lens Logo' src={bookmarkLogo} /> Favourites </div>
            <div className="cart"> <img alt='lens Logo' src={foodBowlLogo} />  Cart (0)</div>
        </div>

        <div className="novabar">
            <div className="left">
                <span>HOME</span>
                <span> CATEGORIES</span>
                <span> RECIPES</span>
                <span> CONTACT</span>
                <span> ABOUT</span>
            </div>
            <div className="right">
                <span className="socialMedia"> <img alt='media Logo' src={socalMediaLogo} /></span>
            </div>
        </div>
        </div>

    </>)
}

export default Header
