import { useLoaderData } from "react-router-dom";
import Random1 from "./Random1";


const Random = () => {
    const randoms = useLoaderData();
    console.log(randoms)
    return (
        <div>
            
            {
                randoms.meals.map(random=><Random1 key={random.idMeal}
                                                   random={random}
                ></Random1>)
            }
        </div>
    );
};

export default Random;