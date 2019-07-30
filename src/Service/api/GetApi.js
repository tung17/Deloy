import axios from 'axios';
import {Action} from './../../actions';
import {Config} from './../../Config/Config';

export const GetApiObject = { //https://viblo.asia/p/redux-thunk-vs-redux-saga-GrLZDvvV5k0
    GetFoodAll:()=>(dispatch) =>{
        axios.get(`${Config.Server}/api/MonAn`,{
            headers:{
                'Tokens':localStorage.getItem('User')
            }
        }).then(res=>{
            dispatch(Action.GetFood(res,false));
        });
    },

    GetFoodDetail:(name)=>(dispatch)=>{
        axios.get(`${Config.Server}/api/MonAn?Name=${name}`).then(res=>{
            dispatch(Action.GetFoodDetail(res,false));
            console.log(res.data);
            localStorage.setItem('FoodID',res.data[0]._id);
            localStorage.setItem('FoodName',res.data[0].Name);
        });
    },

    GetTableAll:()=>(dispatch)=>{
        axios.get(`${Config.Server}/api/BanAn`).then(res=>{
            dispatch(Action.GetTable(res,false));
        });
    },

    GetTableDetail:()=>(stt,dispatch)=>{
        axios.get(`/BanAn?STT=${stt}`).then(res=>{
            dispatch(Action.GetTable(res,false));
        });
    },

    GetCommentAll:()=>(dispatch)=>{
        axios.get(`${Config.Server}/api/Comment`,{
            headers:{
                'Tokens':localStorage.getItem('User')
            }
        }).then(res=>{
            //console.log(res);
            dispatch(Action.GetComment(res,false))
        });
    },

    GetOrderByUserID:(filter)=>async (dispatch)=>{
        await axios.get(`${Config.Server}/api/GetOrderAndUserAndFoodAndTable?UserID=${filter}`,{
            headers:{
                'Tokens':localStorage.getItem('User')
            }
        }).then(res=>{
            //console.log(res);
            dispatch(Action.GetOrder(res,false))
        });
    },

    GetCommentDetail:(id)=>(dispatch)=>{
        axios.get(`${Config.Server}/api/CommentAndUser?FoodID=${id}`,{
            headers:{
                'Tokens':localStorage.getItem('User')
            }
        }).then(res=>{
            dispatch(Action.GetComment(res,false))
        });
    },

    GetUserAll:()=>(dispatch)=>{
        axios.get(`${Config.Server}/api/User`,{
            headers:{
                Tokens:localStorage.getItem('User')
            }
        }).then(res=>{
            dispatch(Action.GetUser(res,false));
        })
    },

    GetUserDetail:(id)=>(dispatch)=>{
        axios.get(`${Config.Server}/api/User/GetByID?ID=${id}`).then(res=>{
            dispatch(Action.GetUser(res,false));
        })
    },

    LoginCommand:(name,pass,dispatch)=>async ()=>{
        console.log(pass);
        axios.post(`${Config.Server}/api/Login`,{
            Name:name,
            Pass:pass
        }).then(res=>{
            dispatch(Action.GetUser(res,false));
            if(res.data.Token!=undefined)
            localStorage.setItem('User',res.data.Token);
            localStorage.setItem('UserID',res.data.UserId);
        });
    }
}