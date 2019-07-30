import axios from 'axios';
import {Action} from './../../actions';
import {Config} from './../../Config/Config';

export const PutApiObject = {
    PutOrderApi:(filter)=>(dispatch)=>{
        //console.log(filter);
        axios.put(`${Config.Server}/api/DonHang`,filter,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            //console.log(res);
            dispatch(Action.PutOrder(res,false))
        })
    }
}