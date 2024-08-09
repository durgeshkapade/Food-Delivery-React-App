import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{

    const [btnName,setBtnName] = useState("Login");
    const onlineStatus  = useOnlineStatus();

    return(
        <div className=" fixed z-10 bg-slate-50 w-screen flex justify-between px-20 text-[#424549] shadow-md"> 

            <div className="logoContainer flex items-center gap-6">
                <img className="logo" width="100px" src={LOGO_URL} ></img>
                <div className="font-bold text-black">
                    Shirpur
                </div>
            </div>

            <div className="nav-items ">
                <ul>
                    <li>
                        Online : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="hover:text-[#fc8019]">
                       <Link to="/"> Home </Link>
                    </li>
                    <li className="hover:text-[#fc8019]" >
                        <Link to="/about"> About Us </Link>
                    </li>
                    <li className="hover:text-[#fc8019]" >
                        <Link to='/contact'> Contact Us </Link>
                    </li>
                    <li className="hover:text-[#fc8019]" >
                        <Link to='/grocery'> Grocery </Link>
                    </li>
                    <li className="hover:text-[#fc8019]" >
                        Cart
                    </li>
                    <button className="login" onClick={()=>{
                        btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}
                        } > {btnName} </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;