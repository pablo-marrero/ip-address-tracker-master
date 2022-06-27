import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { IconLocation } from './IconLocation'
import { useStore } from "../../Context/store.js"
import { Loader } from '../Loader/Loader' 
import "./SectionMap.css"

export const SectionMap = () => {
  const [state] = useStore()
  const [location, setLocation] = useState({
    lati:"",
    long:""
  })

  useEffect(()=>{
    if(state.dataIp){
      setLocation({
        lati:state.dataIp.location.lat,
        long:state.dataIp.location.lng
      })
    }
  },[state])

  return (
    <section className='container-map'>
      {state.dataIp?<MapContainer center={{lat:state.dataIp.location.lat, lng:state.dataIp.location.lng}} zoom={13}>
       <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{lat:location.lati, lng: location.long}} icon={IconLocation}/>
       </MapContainer> : <Loader/>}
       
    </section>
  )
}
