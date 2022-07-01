import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut,
         GoogleAuthProvider,
         signInWithPopup
        } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase.js"


const authContext = React.createContext()

export const useAuth = ()=>{
    const context = useContext(authContext)
    if (!context) throw new Error("There is no Auth Provider");
    return context
}

export function AuthProvider({ children }){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signup = (email, password)=>
        createUserWithEmailAndPassword(auth,email, password)

    const login = (email,password)=>
        signInWithEmailAndPassword(auth,email, password)

    const logout = ()=>signOut(auth)

    const loginWithGoogle = ()=>{
        let googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSuscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
    })
        return ()=> unSuscribe() 
    },[])

    useEffect(()=>{
        if(user){
            console.log(user)
            localStorage.setItem("myUser", JSON.stringify(user))
        }
    },[user])

    
        return (
            <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle }}>{children}</authContext.Provider>
          );
}
