import React from "react";
import './Filter-module.css';
import { CATEGORY_FILTER, MEAL_FILTER, DIETARY_FILTER } from "../../StaticFiles/globle-variables";
const Filter = (props) => {

    const { categoryFilter, onCategoryFilterChange, mealFilter, onMealFilterChange,
        dietaryFilter, onDietaryFilterChange } = props;

    const getDietaryFilter = () => {
        return (DIETARY_FILTER.map(elem => {
            return (
                <div className="form-check">
                    <input type="checkbox"
                        value="" id={elem.id}
                        checked={dietaryFilter.includes(elem.id)}
                        onChange={() => onDietaryFilterChange(elem.id)} />
                    <label className="lable" for={elem.id}>
                        {elem.label}
                    </label>
                </div>
            )
        }))
    }
    const getCategoryFilter = () => {
        return (CATEGORY_FILTER.map(elements => {
            return (
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                        value=""
                        id={elements.id}
                        checked={categoryFilter.includes(elements.id)}
                        onChange={() => onCategoryFilterChange(elements.id)}
                    />
                    <label className="lable" for={elements.id}>
                        {elements.label}
                    </label>
                </div>
            )
        })

        )
    }
    const getMealFilter = () => {
        return (MEAL_FILTER.map(elements => {
            return (
                <div className="form-check">
                    <input className="form-chech-input" type="checkbox"
                        value="" id={elements.id}
                        checked={mealFilter.includes(elements.id)}
                        onChange={() => onMealFilterChange(elements.id)} />
                    <label className="lable" for={elements.id}>
                        {elements.label}
                    </label>
                </div>
            )
        })

        )
    }
    return (
        <div className="filterSection">
            <div className="FilterSection" >
                <span className="heading"> Filter Recipes:</span>
                <span className="discription">Check multipe boxes below to narrow recipe search results:</span>
            </div>

            <div className="categoryFilterSection" >
                <div className="heading-div">
                    <span className="heading"> By Season: </span>
                </div>
                {getCategoryFilter()}
            </div>
            <div className="categoryFilterSection" >
                <div className="heading-div">
                    <span className="heading"> By Meal </span>
                </div>
                {getMealFilter()}
            </div>
            <div className="categoryFilterSection" >
                <div className="heading-div">
                    <span className="heading"> By Dietary Preference </span>
                </div>
                {getDietaryFilter()}
            </div>
        </div>
    )
}

export default Filter;