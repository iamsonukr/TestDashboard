import { createContext, useEffect, useState } from "react";

import axios from 'axios'

export const ServiceContext=createContext(null)

const ServiceContextProvider=(props)=>{
    const [allServices,setAllServices]=useState(null)
    const [allAddOns,setAllAddOns]=useState(null)
    const [allUsers,setAllUsers]=useState(null)

    const url='https://yarpacom.onrender.com'

    // 1> fetching all the services
    const fetchServices=async(req,res)=>{
        try {
                const response=await axios.get(`${url}/api/v1/admin/list-service/`)
                console.log(response.data.data)
                setAllServices(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

      // 1> fetching all the addons
    const fetchAddOns=async(req,res)=>{
        try {
                const response=await axios.get(`${url}/api/v1/admin/addons/get-addons`)
                console.log(response.data.data)
                setAllAddOns(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    // 3> Fetch all users
  

    
    
    const fetchBookings=async(req,res)=>{
        try {
            const response=await axios.get()
        } catch (error) {
            
        }
    }



    useEffect(()=>{
        fetchServices()
        fetchAddOns()

    },[])
    
    const contextValues={
        allServices,
        allAddOns,
    }

    return(
        <ServiceContext.Provider value={contextValues}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceContextProvider