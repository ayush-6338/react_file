import React from "react";

const Navbar = ()=>{
    return(
        <>
            <div className="flex justify-between item-center p-4 bg-gray-800 text-white">
                <div>
                    <img src="#" alt="logo"/>
                </div>
                <div className="space-x-6">
                    <span>Home</span>
                    <span>contact</span>
                    <span>about</span>
                </div>
                <div className="bg-blue-500 border border-white rounded w-[5%] text-center">
                    <button>Search</button>
                </div>
            </div>
        </>
    )
}
export default Navbar;