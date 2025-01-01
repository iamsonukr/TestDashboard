import { createContext, useEffect, useState } from "react";


const UserContext=createContext(null)

const UserContextProvier=(props)=>{
    const[allUsers,setAllUsers]=useState(null)

    const fetchAllUsers=async(req,res)=>{
        try {
                const response=await axios.get(`${url}/api/v1/users/all`)
                console.log(response.data.data)
                setAllUsers(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

    userContextValues={
        allUsers,
    }


    return(
        <>
        
        </>
    )
}       