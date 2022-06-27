import React, { useEffect, useState } from 'react'
import { useStore } from "../../Context/store.js"
import "./LookData.css"

export const LookData = () => {
    const [state] = useStore()
    const [data, setData] = useState({
        ipAddress:"",
        location:"",
        timeZone:"",
        ISP:""
    })
    useEffect(()=>{
        if(state.dataIp){
            if(state.dataIp.code){return}
            if(!state.dataIp.code){
                setData({
                    ipAddress: state.dataIp.ip,
                    location: state.dataIp.location.region,
                    timeZone: state.dataIp.location.timezone,
                    ISP: state.dataIp.isp
                })
            }
        }
    },[state])

  return (
    <section className='container-data'>
        <div>
            <div>
                <p>ip address</p>
                {data.ipAddress&& <p>{data.ipAddress}</p>}
            </div>
        </div>

        <div>
            <div>
                <p>Location</p>
                {data.location&& <p>{data.location}</p>}
            </div>
        </div>

        <div>
            <div>
                <p>Timezone</p>
                {data.timeZone&& <p>{data.timeZone}</p>}
            </div>
        </div>

        <div>
            <div>
                <p>ISP</p>
                {data.ISP&& <p>{data.ISP}</p>}
            </div>
        </div>

    </section>
  )
}
