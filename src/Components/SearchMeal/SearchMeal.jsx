import { ArrowDownLeftIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const SearchMeal = () => {
    const [value ,setValue]=useState('');
    const [datas,setData]=useState({ meals: [] })
    
const clickHandle = () =>{
  
     
         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res=>res.json())
        .then(data=>setData(data))
     
 


}


const handleInputChange = (e)=>{
  setValue(e.target.value)

}





console.log(datas)
    return (
        <div>
            
            <h1 className="text-center text-pink-500 font-extrabold text-4xl p-3 ">Search Your Meal</h1>
           <div className='flex justify-center'>
           <div >
           <input className="rounded-md border-4 border-pink-500" type="text" value={value} onChange={handleInputChange} id="myInput" placeholder="Enter text" />
            </div>
            <div>
            <ArrowDownLeftIcon onClick={clickHandle}  className="size-6 text-blue-500" />
            </div>
            </div> 
             
             <div className='grid grid-cols-4 gap-4 rounded-md p-8'>
             {
                datas.meals.map(meal=>{
                   const {strMealThumb,strMeal,strArea,idMeal}=meal
                   return(
                    <div key={idMeal}  >
                        <div >
                            <div>
                        <img src={strMealThumb} alt=""  />
                           <h4>{strMeal}</h4>
                           <h4>{strArea}</h4>
                           </div>

                            </div>

                    </div>
                   )

                })
            }
             </div>
            
        </div>
    );
};

export default SearchMeal;