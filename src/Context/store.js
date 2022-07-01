import React, { useReducer, useContext } from "react";

const Store = React.createContext()

export const useStore = ()=> useContext(Store) //Hooks personalizado para evitar importar importar el useContext en cada componente
export const StoreProvider = ({children, reducer, initialState} )=>{ //Engloba todos los hijos para que puedan acceder al conexto.
    //Recomendación, ponerlo en el archivo index.js
    const [state, dispatch] = useReducer(reducer,initialState)

    return <Store.Provider value= {[state,dispatch]}>{children}</Store.Provider>
}