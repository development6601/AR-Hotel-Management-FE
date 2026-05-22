import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Bookings from "../pages/Bookings";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const AppRoutes = ( )=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/Bookings" element={<Bookings/>}/>
                <Route path="/Customers" element={<Customers/>} />
                <Route path="*" element={ <NotFound/> } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;