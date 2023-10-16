import React from "react";

export default function Transaction({id,date,amt}){
    return (
        <div>
            <p>ID: {id}</p>
            <p>Date:{date}</p>
            <p>Amount: ${amt}</p>

        </div>
    )
}