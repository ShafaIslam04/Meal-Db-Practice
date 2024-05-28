

import { Link } from "react-router-dom";




const SearchByAlphabet = () => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var num = 0;
    return (
        <div className="grid grid-cols-12 gap-4" >
            {alphabets.map((alphabet,index)=>{
                  return (
             <Link to={`/SearchByAlphabet/${alphabet}`}  key={index}><div className="bg-fuchsia-400 rounded-md w-8 text-center " key={num++}  >

             <h2>{alphabet}</h2>
         </div></Link>       


                  )

                })}
        </div>
    );
};

export default SearchByAlphabet;