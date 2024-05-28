import { ArrowDownLeftIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import { useNavigate, useNavigation } from 'react-router-dom';
const Ingredients = () => {
     
    const [datas,setDatas]=useState({meals:[]})
    const [value,setValue]=useState('') 
    const navigate = useNavigate();
    console.log(navigate);
    
    const handleChange = ()=>{
       fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`) 
       .then(res=>res.json())
       .then(data=>setDatas(data))

     }

     const handleClick = (e) =>{
       
        setValue(e.target.value)


     }

     const changeNavigate= ()=>{
        navigate(-1)
     }


    return (
        <div>
           
           




            <h1 className="text-center text-cyan-600 font-extrabold text-4xl p-3 ">Search With Ingredients</h1>
           <div className='flex justify-center'>
           <div >
           <input className="rounded-md border-4 border-cyan-600 " type="text" value={value} onChange={handleClick } id="myInput" placeholder="Enter text" />
            </div>
            <div>
            <ArrowDownLeftIcon className="size-6 text-blue-500" onClick={handleChange} />
            </div>
            </div>

            <div className='grid grid-cols-4 gap-4 rounded-md p-8'>
            {
                datas.meals.map(ingredient=>{
                    const{strMealThumb,strMeal,idMeal}=ingredient
                    return(
                      <div key={idMeal}>
                       <div className='text-pink-950 font-serif'>
                       <img className='rounded-md' src={strMealThumb} alt=""  />
                           <h4>{strMeal}</h4>
                           <h4>{idMeal}</h4>
                       </div>
                      </div>  
                    )
                })
            }
           </div>
            
            <div className='justify-center'><button className="text-black bg-cyan-500 rounded-md h-8 w-20" onClick={changeNavigate}>Go Back</button></div>
        </div>
    );
};

export default Ingredients;