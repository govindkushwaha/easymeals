let data = [
    { 'season': 'Autumn', 'dietary': 'egg_free', 'meal': 'dinner', 'popular': 'Y', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80' },
    { 'season': 'Spring', 'dietary': 'dairy_free', 'meal': 'dessert', 'popular': 'N', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80' },
    { 'season': 'Summer', 'dietary': 'gluten_free', 'meal': 'lunch', 'popular': 'Y', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80' },
    { 'season': 'Winter', 'dietary': 'sugar_free', 'meal': 'breakfast', 'popular': 'N', 'organic': 'Y', 'image': 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
    
    { 'season': 'Autumn', 'dietary': 'dairy_free', 'meal': 'dessert', 'popular': 'Y', 'organic': 'Y', 'image': 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' },
    { 'season': 'Spring', 'dietary': 'gluten_free', 'meal': 'lunch', 'popular': 'N', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1547928576-b822bc410bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' },
    { 'season': 'Summer', 'dietary': 'sugar_free', 'meal': 'breakfast', 'popular': 'Y', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
    { 'season': 'Winter', 'dietary': 'egg_free', 'meal': 'dinner', 'popular': 'N', 'organic': 'Y', 'image': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80' },
    
    { 'season': 'Autumn', 'dietary': 'gluten_free', 'meal': 'lunch', 'popular': 'Y', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1521116526096-ea3b1c06f8b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
    { 'season': 'Autumn', 'dietary': 'sugar_free', 'meal': 'breakfast', 'popular': 'Y', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' },
    { 'season': 'Spring', 'dietary': 'egg_free', 'meal': 'dinner', 'popular': 'N', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1523529738216-242467d60007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=491&q=80' },
    { 'season': 'Summer', 'dietary': 'dairy_free', 'meal': 'dessert', 'popular': 'Y', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
    
    { 'season': 'Winter', 'dietary': 'sugar_free', 'meal': 'breakfast', 'popular': 'N', 'organic': 'Y', 'image': 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
    { 'season': 'Autumn', 'dietary': 'egg_free', 'meal': 'dinner', 'popular': 'Y', 'organic': 'Y', 'image': 'https://images.unsplash.com/photo-1588418440629-7e2811259e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
    { 'season': 'Spring', 'dietary': 'dairy_free', 'meal': 'dessert', 'popular': 'N', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80' },
    { 'season': 'Summer', 'dietary': 'gluten_free', 'meal': 'lunch', 'popular': 'Y', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1631451457509-454a498df1c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' },
    
    { 'season': 'Winter', 'dietary': 'egg_free', 'meal': 'dinner', 'popular': 'N', 'organic': 'Y', 'image': 'https://images.unsplash.com/photo-1613764816537-a43baeb559c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' },
    { 'season': 'Autumn', 'dietary': 'dairy_free', 'meal': 'dinner', 'popular': 'Y', 'organic': 'N', 'image': 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' },


];

module.exports = data;