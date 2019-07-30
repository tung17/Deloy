import axios from 'axios';
import {Action} from './../../actions';
import {Config} from './../../Config/Config';

export const DeleteApiObject = {
    DeleteFood:(name)=>(dispatch)=>{
        axios.delete(`/MonAn`,{
            Name:name
        }).then(res=>{
            dispatch(Action.DeleteFood(res,false));
        });
    },

    DeleteUser:(name)=>(dispatch)=>{
        axios.delete(`/User`,{
            Name:name
        }).then(res=>{
            dispatch(Action.DeleteUser(res,false));
        });
    },

    DeleteOrder:(filter)=>async (dispatch)=>
    {
        console.log("ok");
        const res = await axios.delete(`${Config.Server}/api/DonHang`,{data:filter});
        dispatch(Action.DeleteOrder(res,false));
    }
}