import { useLoaderData } from "react-router-dom";


const RandomDetail = () => {
   const detail=useLoaderData()
   const meal = detail.meals[0]
    console.log(detail)
    // if (!meal) {
    //     return <p>Loading...</p>;
    //   }
    
      const { strInstructions } = meal;
      
    
    return (
        <div>
            <p className="font-extrabold text-slate-500">Instruction : {strInstructions}</p>
        </div>
    );
};

export default RandomDetail;