"use client"

import { useContext } from "react";
import { DialogContext } from "../contexts/DialogContext";

export function Dialog(){
    const { open, toggleDialog } = useContext(DialogContext);

    return(
        <>
            {
                open && (
                    <div className="w-20 h-10 bg-red-500 text-white">
                        OLÁ!
                    </div>
                )
            }
            
            <button onClick={toggleDialog}>
                Aiiiiii
            </button>
        </>
    );
}