import React from "react";
import classes from './ProductList-module.css';
import Product from "../Product/Product";

const getFilterData = (data, categoryFilter, mealFilter, dietaryFilter) => {
    let filteredData = data;
    
    if ((categoryFilter && categoryFilter.length)) {
        filteredData = [...filteredData].filter(
            element => categoryFilter.includes(element.season)
        )
    }
    if ((dietaryFilter && dietaryFilter.length)) {
        filteredData = [...filteredData].filter(
            element => dietaryFilter.includes(element.dietary)
        )
    }

    if ((mealFilter && mealFilter.length)) {
        filteredData = [...filteredData].filter(
            element => mealFilter.includes(element.meal)
        )
    }

    return filteredData;
};


const ProductList = (props) => {
    const { categoryFilter, mealFilter, dietaryFilter, productData, flagForSearch } = props;
    let filteredData;
    if(!flagForSearch){
     filteredData = getFilterData(productData, categoryFilter, mealFilter, dietaryFilter);
    }
    else{
        filteredData =productData;
    }
    return (
        <div className={classes.productSection}>
            {filteredData.map((product) => {
                return <Product key={product.id} product={product} />
            })}
        </div>
    )
};
export default ProductList