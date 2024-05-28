import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="rounded-md bg-slate-50 h-screen">
            <div className="grid grid-cols-1 gap-2 text-cyan-500 font-extrabold text-2x p-3">
               
            <NavLink to="/">Home</NavLink>
            <NavLink to="/SearchByAlphabet">SearchByAlphabet</NavLink>
            <NavLink to="/Random">Random</NavLink>
            <NavLink to="/Catagory">Catagory</NavLink>
            <NavLink to="/Ingredient">/Ingredient</NavLink>

            </div>
        </div>
    );
};

export default Navbar;