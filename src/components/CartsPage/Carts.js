import React from 'react';
import {ApiBase} from './../../Service/api';
import {Action} from './../../actions';
import { connect } from 'react-redux';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBRow, MDBCol,MDBBtn } from 'mdbreact';
import {OrderRecord} from './OrderRecord';
import './css/style.css';

class Carts extends React.Component
{
    constructor(props)
    {
        super(props);
    }


    async componentWillMount()
    {
        await this.props.GetOrder(localStorage.getItem('UserID'));
        this.Delete = this.Delete.bind(this);
    }

    async Delete(id)
    {
        console.log(id);
        await this.props.DeleteOrder({ID:this.props.Orders.order[id]._id});
        console.log(this.props.DeleteOrderResult);
        if(this.props.DeleteOrderResult.Result == "it's Ok")
        {
            const Data = this.props.Orders.order.filter((_,index)=>index!=id);
            this.props.TriggerOrderState({data:Data});
            console.log(this.props.Orders.order);
        }
    }

    render()
    {
        const {order,isLoading} = this.props.Orders;
        console.log(isLoading);
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

        const ShowedOrder = order.map((item,index)=>{
            return(
                <OrderRecord
                    key={index}
                    ID = {index + 1}
                    Name = {item.FoodID.Name}
                    STT = {item.TableID.STT}
                    Count = {item.Count}
                    Price = {item.FoodID.Price * item.Count}
                    Status = {item.Status}
                    DeleteClick = {this.Delete}
                />
            )
        })
        
        return(
            <MDBCol md="8">
                <MDBTable color="primary-color">
                    <MDBTableHead>
                        <tr>
                            <th>ID</th>
                            <th>Ten mon an</th>
                            <th>STT Ban An</th>
                            <th>So luong</th>
                            <th>Thanh tien</th>
                            <th></th>
                            <th>Thanh toan</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {ShowedOrder}
                    </MDBTableBody>
                </MDBTable>
            </MDBCol>
        )
    }
}

const mapStateToProps = (state)=>({
    Orders:state.GetOrder,
    DeleteOrderResult:state.DeleteOrder
});

const mapDispatchToProp = (dispatch)=>({
    TriggerOrderState:(payload)=>{dispatch(Action.GetOrder(payload,false))},
    GetOrder:async (filter)=>{dispatch( await ApiBase.GetApiObject.GetOrderByUserID(filter))},
    DeleteOrder:async (filter)=>dispatch(ApiBase.DeleteApiObject.DeleteOrder(filter)),
    ToggleUpdate:(payload)=>dispatch(Action.ToggleUpdateCard(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Carts);