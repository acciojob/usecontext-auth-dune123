import { createContext, useContext, useState } from 'react'
import React from 'react';

export const AuthDataContext=createContext();

const AuthContext=({children})=>{
    const [checked,setChecked]=useState(false);

    return (
        <AuthDataContext.Provider value={{checked,setChecked}}>
            {children}
        </AuthDataContext.Provider>
    )
}

export default AuthContext;