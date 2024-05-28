import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            
            <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1">
            <Navbar></Navbar>
            </div>
            <div className="col-span-3">
            <Outlet></Outlet>
            </div>
            </div>
            
            
        </div>
    );
};

export default Home;