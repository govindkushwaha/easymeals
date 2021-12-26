import React from "react";
import './Product-module.css';
import timerLogo from '../../timer-logo.jpg';
import thumbLogo from '../../thumb-logo.jpg';
import ligthenLogo from '../../lighten-logo.jpg';

const Product = (props) => {

    const { product } = props;
    const {image,popular,organic } = product;
    return (
        <div className="productContainers" >
            <div className="image-div">
            <img alt="Hello" className="productImage" src={image} />
            { popular === "Y" ? <div className="popular"><img alt="timer" src={ligthenLogo} />Popular</div> : null}
            { organic === "Y" ? <div className="organic">100% Organic </div> : null}
            </div>
            <div className="priceSection" >
                <span className="priceSection" ><img alt="timer" src={timerLogo} />30 MINUTES</span>
                <span className="priceSection" ><img alt="timer" src={thumbLogo} /> SUPER EASY</span>
            </div>
            <span className="descriptionSection" >Baked sweet potatoes with creamy avocado & pumkin</span>
        </div>
    )

}

export default Product