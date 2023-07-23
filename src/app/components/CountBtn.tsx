"use client"

import { useState } from "react";

export function CountBtn(){
    const [ count, setCount ] = useState(0);

    function handleUpCount(){
        setCount((state)=>state + 1);
    }

    return (
        <button onClick={handleUpCount}>
            Increment {
                count
            }
        </button>
    );
}