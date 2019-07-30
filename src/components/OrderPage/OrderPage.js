import React from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import Tables from './Tables';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import {CartPage} from '../CartsPage/CartsPage';

import './css/style.css'

export const OrderPage = ()=>{
    return(
        <MDBRow className="OrderPage">
            <Order/>
            <Tables/>
        </MDBRow>
    );
}