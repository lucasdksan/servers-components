"use client"

import { ReactNode, createContext, useState } from "react"

export interface DialogProps {
    open: boolean;
    toggleDialog: ()=>void;
}

export const DialogContext = createContext({} as DialogProps);

export function DialogProvider({ children }: { children : ReactNode }){
    const [open, setOpen] = useState(false);

    function toggleDialog(){
        setOpen(state => !state);
    }

    return(
        <DialogContext.Provider value={{ open, toggleDialog }}>
            {
                children
            }
        </DialogContext.Provider>
    );
}