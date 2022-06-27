import { SEARCH_IP , CLEAR_IP} from "../Action/ActionTypes";

export const initialStateIP = {
    dataIp : "",
    msgError:""
}

export function reducer (state = initialStateIP, action){
    switch (action.type) {
        case SEARCH_IP:{
            return {
                dataIp : action.payload.data,
                msgError: action.payload.msg
            }
        }
        case CLEAR_IP:{
            return {
                dataIP:""
            }
        }
        default:
            return state;
           
    }
} 

export default reducer