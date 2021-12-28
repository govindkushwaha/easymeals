import './App.css';
import React, { useState } from 'react'
import Filter from './Component/Filter/Filter';
import Header from './Component/Header/Header';
import ProductList from './Component/ProductList/ProductList';
import dummyData from './StaticFiles/data';


function App() {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [mealFilter, setMealFilter] = useState([]);
  const [dietaryFilter, setDietaryFilter] = useState([]);
  const [productData, setProductData] = useState(dummyData);
  const [flagForSearch, setFlagForSearch] = useState(false);

  const onDietaryFilterChange = (values) => {
    let filterLists;
    if (dietaryFilter.includes(values)) {
      filterLists = dietaryFilter.filter(elements => elements !== values)
    } else {
      filterLists = [...dietaryFilter, values]
    }
    setDietaryFilter(filterLists);
  }

  const onMealFilterChange = (value) => {
    let filterList;
    if (mealFilter.includes(value)) {
      filterList = mealFilter.filter(element => element !== value)
    }
    else {
      filterList = [...mealFilter, value];
    }
    setMealFilter(filterList);
  }
  const onCategoryFilterChange = (value) => {
    let newFilterList;
    if (categoryFilter.includes(value)) {
      newFilterList = categoryFilter.filter(element => element !== value)
    } else {
      newFilterList = [...categoryFilter, value]
    }
    setCategoryFilter(newFilterList)
  }
  return (
    <>
      <div className="appbody">
        <Header setProductData= {setProductData} setFlagForSearch={setFlagForSearch}/>
        <main className='main'>
          <Filter categoryFilter={categoryFilter} onCategoryFilterChange={onCategoryFilterChange}
            mealFilter={mealFilter} onMealFilterChange={onMealFilterChange}
            dietaryFilter={dietaryFilter} onDietaryFilterChange={onDietaryFilterChange}
          />
          <ProductList categoryFilter={categoryFilter} mealFilter={mealFilter} dietaryFilter={dietaryFilter} 
          productData={productData} flagForSearch={flagForSearch}/>
        </main>

      </div>
    </>
  );
}

export default App;
