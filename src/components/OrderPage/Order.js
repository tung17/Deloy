import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { connect } from 'react-redux';
import {ApiBase} from './../../Service/api';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import {Action} from './../../actions';

class Order extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    async OrderAction(event)
    {
        event.preventDefault();
        if(localStorage.getItem("UserID")==undefined&&localStorage.getItem("UserID")==null)
            {
                this.props.ShowSignIn(true);
                return;
            }
            await this.props.AddOrder(
            {
                FoodID:localStorage.getItem('FoodID'),
                UserID:localStorage.getItem('UserID'),
                Name:localStorage.getItem('FoodName'),
                Status:false,
                Count:this.Count.value,
                TableID:this.props.Table.table._id
            }
        );
        alert("Đat hàng thành công, vui lòng check giỏ hàng");
        //window.location.replace("/Cart");
    }

    render()
    {
        return(
                <MDBCol md="4">
                    <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                        <form onSubmit={this.OrderAction.bind(this)}>
                            <MDBCol md="12">
                                <label
                                className="grey-text"
                                >
                                Ten Mon An
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ten Mon An ..."
                                    className="form-control"
                                    required
                                    value={localStorage.getItem('FoodName')}
                                    disabled
                                />
                            </MDBCol>
                            <MDBCol md="12">
                                <label
                                className="grey-text"
                                >
                                So Ban An
                                </label>
                                <input
                                    type="text"
                                    placeholder="So Ban An ..."
                                    className="form-control"
                                    required
                                    value={
                                        this.props.Table.table != null?
                                        this.props.Table.table.STT:''
                                    }
                                    disabled
                                />
                            </MDBCol>
                            <MDBCol md="12">
                                <label
                                className="grey-text"
                                >
                                So Luong
                                </label>
                                <input
                                    type="text"
                                    placeholder="So Luong ..."
                                    className="form-control"
                                    required
                                    ref={(ref)=>{this.Count = ref}}
                                />
                            </MDBCol>
                            <MDBBtn color="primary" type="submit">Dat Ban</MDBBtn>
                        </form>
                    </MDBCard>
                </MDBCol>
        )
    }
}

const mapStateToProps = (state)=>({
    Table: state.GetTableByIndex
});

const mapDispatchToProps = (dispatch)=>({
    AddOrder:(filter)=>{dispatch(ApiBase.PostApiObject.AddOrder(filter))},
    ShowSignIn:(payload) => dispatch(Action.ToggleSignIn(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order);