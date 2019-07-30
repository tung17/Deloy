import Axios from 'axios';
import {Config} from './../Config/Config';


export const UserValidate = async (Address,Email,Name,Pass)=>{
    let ResValid = {ResultRegister:true,ResultSignIn:true,ValidateAddress:"",ValidateEmail:"",ValidateName:"",Validate:"",ValidatePass:""};
    // if(Address==null || Address==undefined|| Address=="")
    // {
    //     ResValid.ResultRegister = false;
    //     ResValid.ValidateAddress = "Địa chỉ không hợp lệ";
    // }
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let CheckEmail = re.test(String(Email).toLowerCase());
    if(!CheckEmail)
    {
        ResValid.ResultRegister = false;
        ResValid.ValidateEmail = "Email không hợp lệ";
    }
    if(Name==null || Name==undefined|| Name=="" || Name.length<4)
    {
        ResValid.ResultRegister = false;
        ResValid.ResultSignIn = false;
        ResValid.ValidateName = "Tên không hợp lệ";
    }
    let data;
    await Axios.get(`${Config.Server}/api/User?Name=${Name}`).then(res=>{
        data = res.data;
    });
    if(data.length>0)
    {
        ResValid.ResultRegister = false;
        ResValid.Validate = "Tên đăng kí bị trùng";
    }
    if(Pass==null || Pass==undefined|| Pass=="" || Pass.length < 4)
    {
        ResValid.ResultRegister = false;
        ResValid.ResultSignIn = false;
        ResValid.ValidatePass = "Pass không hợp lệ";
    }
    return ResValid;
}