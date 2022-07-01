import { SEARCH_IP, CLEAR_IP } from "./ActionTypes"

const apiKey = "at_XFilr7eiAJJP12CMGdWWV3D0X7OCA"
export const getData = async(dispatch, ip)=>{
    let data
    try {
        let status
        status = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress${ip}`)
        .then(response => status = response.json())
        .then(response => data = response)
        if(!data.code){
            dispatch({
                type:SEARCH_IP,
                payload: {
                    data,
                    msg:""
                }
            })
        }
        else{throw new Error(data.messages)}
    } catch (error) {
        await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=8.8.8.8`)
        .then(response =>  response.json())
        .then(response => data = response)
        if(!data.code){
            dispatch({
                type:SEARCH_IP,
                payload: {
                    data,
                    msg:error.message
                }
            })
        }
    }
}

export const clearDataIp = (dispatch)=>{
    dispatch({
        type:CLEAR_IP,
        payload: ""
    })
}