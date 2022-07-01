import { Navigate } from "react-router-dom"
import { useAuth } from "../../Context/AuthContext"
import { Loader } from "../Loader/Loader.jsx"

export function ProotectedRoute({children}){
    const { user, loading } = useAuth()
    if(loading) return <Loader/>

    if(!user) return <Navigate to="/login"/>

    return <>{children}</>
} 