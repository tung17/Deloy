import Axios from 'axios';
import {Config} from './../Config/Config';

export const FoodValidate = async (Name,Price)=>{
    let ResValid = {ResultValidFood:true,ValidateName:"",ValidatePrice:""};
    if(Price==null || Price==undefined || Price=="")
    {
        ResValid.ResultValidFood = false;
        ResValid.ValidatePrice = "Giá sản phẩm chưa nhập";
    }
    if(Name==null || Name==undefined|| Name=="" || Name.length<4)
    {
        ResValid.ResultValidFood = false;
        ResValid.ResultSignIn = false;
        ResValid.ValidateName = "Tên món ăn không hợp lệ";
    }
    let data;
    await Axios.get(`${Config.Server}/api/MonAn?Name=${Name}`).then(res=>{
        data = res.data;
    });
    if(data.length>0)
    {
        ResValid.ResultValidFood = false;
        ResValid.ValidateName = "Tên món ăn bị trùng";
    }
    return ResValid;
}