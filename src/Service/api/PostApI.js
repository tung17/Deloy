import axios from 'axios';
import {Action} from './../../actions';
import {Config} from './../../Config/Config';

export const PostApiObject = {
    AddFood:(data)=>async (dispatch)=>{
        //console.log(filter);
        await axios.post(`${Config.Server}/api/MonAn`,data,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
            dispatch(Action.AddFood(res,false));
        })
    },

    AddTable:(data)=>async (dispatch)=>{
        await axios.post(`${Config.Server}/api/BanAn`,data,
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            dispatch(Action.AddTable(res,false));
        })
    },

    AddComment:(data)=>(dispatch)=>{
        axios.post(`${Config.Server}/api/Comment`,data,{
            headers:{
                'Content-Type': 'application/json',
                Tokens:localStorage.getItem('User')
            }
        }).then(res=>{
            dispatch(Action.AddComment(res,false));
        });
    },

    AddOrder:(data)=>async (dispatch)=>{
        console.log(data);
        await axios.post(`${Config.Server}/api/DonHang`,data,{
            headers:{
                'Content-Type': 'application/json',
                Tokens:localStorage.getItem('User')
            }
        }).then(res=>{
            dispatch(Action.AddOrder(res,false));
        })
    },

    AddUser:(data)=>(dispatch)=>{
        axios.post(`${Config.Server}/api/User`,data,
        {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
            dispatch(Action.AddUser(res,false));
        });
    },

    AddTransaction:(data)=>(dispatch)=>{
        axios.post(`${Config.Server}/api/Transaction`,data,
        {
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            dispatch(Action.AddTransaction(res,false));
        })
    }
}