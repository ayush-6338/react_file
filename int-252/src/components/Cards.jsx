import React from "react";

const Card=({props})=>{
    return(
        <div>
            <div className="text-center card bg-white shadow-md rounded-lg p-4 border border-gray-200">
                <div>
                    <img class="hover:scale-110 " src={props.url} alt="image"/>
                </div>
                <div className="pt-5">
                    <h1 class="font-bold text-2xl text-green-500">{props.title}</h1>
                    <p>A mountain is a large, elevated natural landform, typically steeper and taller than a hill, defined by its prominence, steep slopes, and a peak or summit</p>
                </div>
            </div>
        </div>
    )
}
export default Card;