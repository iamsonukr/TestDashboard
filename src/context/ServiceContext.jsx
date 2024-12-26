import { createContext, useEffect, useState } from "react";

import axios from 'axios'

export const ServiceContext=createContext(null)

const ServiceContextProvider=(props)=>{
    const [allServices,setAllServices]=useState(null)

    const url='http://localhost:5001'

    // fetching all the services
    const fetchServices=async(req,res)=>{
        try {
                const response=await axios.get(`http://localhost:5001/api/v1/admin/list-srvices`)
                console.log(response.data.data)
                setAllServices(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const fetchBookings=async(req,res)=>{
        try {
            const response=await axios.get()
        } catch (error) {
            
        }
    }



    useEffect(()=>{
        fetchServices()

    },[])

    const contextValues={
        allServices,
    }

    return(
        <ServiceContext.Provider value={contextValues}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceContextProvider