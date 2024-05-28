import { Link, useNavigate } from "react-router-dom";

const Catagory1 = ({data}) => {
    console.log(data);
    const{idCategory,strCategory,strCategoryThumb}=data;
    

    
    return (
        <div>
           
           <h4 className="font-extrabold text-slate-500">Catagory : {strCategory}</h4>
           
           
            <p className="font-extrabold text-slate-500">Id:{idCategory}</p>
            
            
            <img className="h-64 rounded" src={strCategoryThumb} alt=""  />
            
<Link to={`/Catagory/${idCategory}`}><div className="text-center p-5"><button className="text-black bg-cyan-500 rounded-md h-8 w-20">Instruction</button></div></Link>

             
        </div>
    );
};

export default Catagory1;