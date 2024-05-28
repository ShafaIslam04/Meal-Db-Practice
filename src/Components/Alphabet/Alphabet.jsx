

// const Alphabet = ({data}) => {
//     const {strArea, 
//         strMeal,strMealThumb,
//         strTags} = data
//     return (
//         <div>
//             <img className="h-64 rounded" src={strMealThumb} alt="" />
//            <h4>{strArea}</h4> 
//            <h4>{strMeal}</h4>
//            <h4>{strTags}</h4>

import { useLoaderData } from "react-router-dom";

           
//         </div>
//     );
// };

// export default Alphabet;


const Alphabet = () => {
    const datas = useLoaderData();

  if (!datas || !datas.meals) {
    return <p>No meals found.</p>;
  }
    console.log(datas);
    // const {strArea, 
    //             strMeal,strMealThumb,
    //             strTags} = datas
    return (
        <div className="grid grid-cols-3 gap-3">
      {datas.meals.map(data => {
        const { strArea, strMeal, strMealThumb, strTags } = data;
        return (
          <div key={data.idMeal} className="text-cyan-600">
            <img className="h-64 rounded" src={strMealThumb} alt={strMeal} />
            <h4>{strArea}</h4>
            <h4>{strMeal}</h4>
            <h4>{strTags}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Alphabet;