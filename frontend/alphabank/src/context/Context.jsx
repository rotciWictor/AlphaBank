import React, { createContext, useState } from "react";

export const Context = createContext({});

export const TaskProvider = (props) => {
   
    return(
        <Context.Provider
            value={{
                
            }}
        >

            {props.children}
        </Context.Provider>
    )
}
