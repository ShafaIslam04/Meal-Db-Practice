import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';

import Random from './Components/Random/Random.jsx';
import Catagory from './Components/Catagory/Catagory.jsx';
import Ingredients from './Components/Ingredients/Ingredients.jsx';
import RandomDetail from './Components/Random/RandomDetail.jsx';
import NewCatagory from './Components/NewCatagory/NewCatagory.jsx';
import Alphabet from './Components/Alphabet/Alphabet.jsx';
import SearchByAlphabet from './Components/SearchByAlphabet/SearchByAlphabet.jsx';
 const router = createBrowserRouter([

{
path:"/",
element:<Home></Home>,
children:[
{
  path:"/SearchByAlphabet",
  element:<SearchByAlphabet></SearchByAlphabet>
},
{
  path:"/SearchByAlphabet/:alphabet",
  loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${params.alphabet}`),
  element : <Alphabet ></Alphabet>
},
{
  path:"/Random",
  loader : ()=>fetch('https://www.themealdb.com/api/json/v1/1/random.php'),
  element:<Random></Random>
},
{
  path:"/Random/:idMeal",
  loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/random.php/${params.idMeal}`),
  element:<RandomDetail></RandomDetail>

},
{
  path:"/Catagory",
  loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
  element:<Catagory></Catagory>
},
{
  path:"/Catagory/:idCategory",
  loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${params.idCategory}`),
  element:<NewCatagory></NewCatagory>

},
{
  path:"/Ingredient",
  element:<Ingredients></Ingredients>
}




]
}




 ])









ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
