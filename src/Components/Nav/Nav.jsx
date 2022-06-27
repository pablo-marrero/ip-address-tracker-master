import React, { useState, useEffect } from 'react'
import { clearDataIp, getData } from '../../ContentReducer/Action/Action'
import { useStore } from "../../Context/store.js"
import "./Nav.css"

export const Nav = () => {
  //Example : https://geo.ipify.org/api/v2/country,city?apiKey=apiKey&ipAddress=8.8.8.8

  const [state,dispatch] = useStore()
  const apiKey = "at_FJYOK3G2qxGCwPj2nzvrwFSwZCfFD"
  const [ipAddress, setIpAddress] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e)=>{
    e.preventDefault()
    setIpAddress(e.target.value)
  }

  const searchIp = (e)=>{
    e.preventDefault()
    if((/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress))
     || (/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/)
    ){
        try {
         clearDataIp(dispatch)
          getData(dispatch,`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
        } catch (error) {
          console.log(error)
        }
    }
    else{
        setError("Invalid Ip Address")
    }
  }

  useEffect(()=>{
    getData(dispatch,`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
  },[])


  return (
    <nav className='container-nav'>
        <form>
            <input type="text" placeholder='Search for any IP address or Domain' value={ipAddress} onChange={handleChange}/>
            <button onClick={searchIp}>
              <div>|</div>
              <div>|</div>
            </button>
        </form>
        {state.msgError && <p>{state.msgError}</p>}
        {error && <p>{error}</p>}
    </nav>
  )
}
