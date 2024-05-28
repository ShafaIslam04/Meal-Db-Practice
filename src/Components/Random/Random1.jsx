import { Link } from "react-router-dom";


const Random1 = ({random}) => {
    const{strMeal,strMealThumb,idMeal
    } = random

    return (
        <div>
            <p className="font-extrabold text-2x ml-60">Recipe :{strMeal
}</p>
            <img className="h-96 rounded ml-44 p-8" src={strMealThumb} alt=""  />
            {/* <p className="font-extrabold text-slate-500 ">{strInstructions}</p> */}
            <Link to={`/Random/${idMeal}`}><button className="text-black bg-pink-500 rounded-md ml-80">Recipe Detail</button></Link>
            
        </div>
    );
};

export default Random1;