import React from "react";
import Card from "./Cards";

const CardContainer = ({data})=>{
    return(
        <div>
            <div className = "grid grid-cols-3 gap-4 p-6 bg-gray-100">
                <Card props ={data[0]} />
                <Card props ={data[1]}/>
                <Card props ={data[2]}/>
            </div>
        </div>
    )
}

export default CardContainer;