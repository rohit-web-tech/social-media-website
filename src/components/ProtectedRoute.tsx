import {Outlet , Navigate} from "react-router-dom"
import {useState} from "react"

const ProtectedRoute = () => {
    const auth = true ;
  return auth ? <Outlet /> : <Navigate to="/login" /> 
}

export default ProtectedRoute
