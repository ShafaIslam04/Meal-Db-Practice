import { useLoaderData, useParams } from "react-router-dom";


const NewCatagory = () => {
    const catagory = useLoaderData()
       const {idCategory} = useParams();
       const datas = catagory.categories;
       const data = datas.find(cat => cat.idCategory===idCategory)
       console.log(datas)
       const {
        strCategoryDescription
        } = data
    return (
        <div>
           <h4 className="text-center text-pink-500 font-extrabold text-1xl p-3 "> Description : {strCategoryDescription}</h4>
        </div>
    );
};

export default NewCatagory;