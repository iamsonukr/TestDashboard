import { createContext, useContext } from "react";



const AdminContext=createContext(null)

const AdminContextProvider=(props)=>{



    const contextValue={

    }

    return(
        <AdminContext.Provider value={contextValue}
        >
            {props.children}
        </AdminContext.Provider>
    )
}
