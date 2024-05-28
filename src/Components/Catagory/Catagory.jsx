import { useLoaderData, useNavigate } from "react-router-dom";
import Catagory1 from "../Catagory1/Catagory1";

const Catagory = () => {
    const datas = useLoaderData()
    const navigate = useNavigate()
    const changeNavigate = () =>{
        navigate(-1)
    }
    console.log(datas);
    return (
        <div className=" grid grid-cols-3 gap-3">
            
            {datas.categories.map(data=><Catagory1 key={data.idCategory} data={data}></Catagory1>)}
             
            <div className='justify-center'><button className="text-black bg-cyan-500 rounded-md h-8 w-20" onClick={changeNavigate}>Go Back</button></div>
        </div>
    
    );
};

export default Catagory;