import React from 'react'
import "./Loader.css"

export const Loader = () => {
  //Funciona?
  return (
    <div className="container-loader">
    <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div> 
    </div>
 )
}    