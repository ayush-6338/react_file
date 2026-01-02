import React from "react";
import Image from "./Image";

function Nav(){
    return(
        <div className="navbar flex justify-evenly items-center p-4 h-20 ">
        <Image className="object-scale-down" />
        <div className="nav-links flex justify-between w-2/5 font-medium">
          <a href="#" > OUR MENU</a>
          <a href="#" > DOMINO'S STORES</a>
          <a href="#" > GIFT CARD</a>
          <a href="#" > CORPORATE ENQUIRY</a>
          <a href="#" > CONTACT</a>
        </div>
        <div > 
          <button className="buttons flex justify-between items-center border-2 bg-red-600 text-white p-2 rounded-lg  h-15">Download App</button>
        </div>  
    </div> 
    )
}

export default Nav;