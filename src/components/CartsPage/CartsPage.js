import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import Carts from './Carts';
import ConfirmCart from './ConfirmCart';
import UpdateCard from './UpdateCard';
import './css/style.css';
import  { Redirect } from 'react-router-dom'

export const CartPage = ()=>
{
    if(localStorage.getItem("UserID")==undefined&&localStorage.getItem("UserID")==null)
            {
                alert("vui lòng đang nhập");
                return <Redirect to='/'  />
            }
    return(
        <MDBRow className="carts">
            <Carts/>
            <ConfirmCart/>
            <UpdateCard/>
        </MDBRow>
    );
}