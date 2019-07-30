import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, ModalHeader, ModalBody } from 'mdbreact';
import { MDBRow, MDBCol } from 'mdbreact';
import {ApiBase} from './../../Service/api';
import {Action} from './../../actions';
import { connect } from 'react-redux';
import Order from '../OrderPage/Order';

class UpdateCard extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    UpdateAction()
    {
        this.props.UpdateOrder({Count:this.Count.value});
    }

    render()
    {
        const {isUpdateCardToggle} = this.props.Toggle1;
        return(
            <MDBModal isOpen={isUpdateCardToggle} toggle={()=>this.props.toggle1(!isUpdateCardToggle)}>
                <ModalHeader toggle={()=>this.props.toggle1(!isUpdateCardToggle)}>
                    Cap nhat don hang
                </ModalHeader>
                <ModalBody>
                    <MDBRow>
                        <form onSubmit={()=>this.UpdateAction.bind(this)}>
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
                                    ref={(ref)=>{this.Count = ref}}
                                />
                            </MDBCol>
                            <MDBBtn color="primary" type="submit">Xac Nhan</MDBBtn>
                        </form>
                    </MDBRow>
                </ModalBody>
            </MDBModal>
        )
    }
}

const mapStateToProps = (state)=>({
    Toggle1:state.IsOpen,
    Table: state.GetTableByIndex
});

const mapDispatchToProps = (dispatch)=>({
    toggle1:(payload)=>dispatch(Action.ToggleUpdateCard(payload)),
    UpdateOrder:(filter)=>dispatch(ApiBase.PutApiObject.PutOrderApi(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateCard);