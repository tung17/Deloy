import React from 'react';
import { MDBRow, MDBCol,MDBBtn } from 'mdbreact';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer,MDBCardImage } from "mdbreact";
import { connect } from 'react-redux';
import {ApiBase} from './../../Service/api';
import './css/style.css';

class ConfirmCart extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    ConfirmOrder()
    {

        this.props.Orders.order.map(item=>{
            if(!item.Status)
            this.props.UpdateOrderRecord({ID:item._id,Status:true});
        });

        this.props.AddTransaction({
            OrderTime:Date.now,
            TotalOrder:this.props.Orders.order.length,
            TotalPrice:this.Price.innerHTML,
            UserID:this.props.Orders.order[0].UserID._id
        });
        window.location.reload();
    }
    render()
    {
        const {order,isLoading} = this.props.Orders;
        console.log(order);
        if(isLoading == undefined || isLoading || order == '')
        {
            return(
                <div>
                    Loading...
                </div>
            )
        }
        let TotalPrice = 0;
        const AvailableOrder = (order!='')?order.filter(item=>{
            TotalPrice += item.FoodID.Price * item.Count;
            return(!item.Status);
        }):[];
        if(AvailableOrder.length == 0 || order[0].UserID == null)
        {
            return(
                <div>

                </div>
            );
        }
        return(
            <MDBCol md="4">
                <MDBCard style={{ width: "18rem", marginTop: "1rem",padding:"1rem" }}>
                    <MDBCardImage className="img-fluid" src={order[0].UserID.Image}></MDBCardImage>
                    <label
                        className="black-text"
                    >
                        Name
                        <span className="span-text">{AvailableOrder[0].UserID.Name}</span>
                    </label>
                    <label
                        className="black-text"
                    >
                        So Don Hang:
                        <span className="span-text">{AvailableOrder.length}</span>
                    </label>
                    <label
                        className="black-text"
                    >
                        Tong Tien:
                        <span className="span-text"
                        ref={(ref)=>{this.Price = ref}}
                        >{TotalPrice}</span>
                    </label>
                    <MDBBtn color="primary" type="submit" onClick={this.ConfirmOrder.bind(this)}>Xac Nhan</MDBBtn>
                </MDBCard>
            </MDBCol>
        )
    }
}

const mapStateToProps = (state)=>({
    Orders:state.GetOrder,
    TotalPrice:state.TotalPrice
});

const mapDispatchToProps = (dispatch)=>({
    AddTransaction:(filter)=>dispatch(ApiBase.PostApiObject.AddTransaction(filter)),
    UpdateOrderRecord:(filter)=>dispatch(ApiBase.PutApiObject.PutOrderApi(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmCart);