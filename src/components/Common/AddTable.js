import React from 'react';
import {Action} from './../../actions';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol } from 'mdbreact';
import {ApiBase} from './../../Service/api';

class AddTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    async HandleSubmit(event)
    {
        event.preventDefault();
        const data = {};
        data.STT = this.STT.value;
        data.Status = this.STATUS.value;
        console.log(data);
        await this.props.AddTableAction(data);
        window.location.reload();
    }
    
    render()
    {
        return(
                <MDBModal isOpen={this.props.Toggle.isAddTableToggle} toggle={()=>this.props.toggle(!this.props.Toggle.isAddTableToggle)}>
                <MDBModalHeader toggle={()=>this.props.toggle(!this.props.Toggle.isAddTableToggle)}>THÊM BÀN ĂN</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                    <MDBCol md="12">
                        <form
                        onSubmit={this.HandleSubmit}>
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                STT
                            </label>
                            <input
                                type="text"
                                ref={(ref)=>{this.STT = ref}}
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
                                required
                            />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                STATUS
                            </label>
                            <input
                                type="text"
                                ref={(ref)=>{this.STATUS = ref}}
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
                                required
                            />
                            <MDBBtn color="primary" type="submit">SUBMIT</MDBBtn>
                        </form>
                    </MDBCol>
                    </MDBRow>
                </MDBModalBody>
                </MDBModal>
        )
    }
}

const mapStateToProps = (state)=>({
    Toggle:state.IsOpen
});

const mapDispatchToProps = (dispatch)=>({
    toggle:(payload)=>dispatch(Action.ToggleAddTable(payload)),
    AddTableAction:(filter)=>dispatch(ApiBase.PostApiObject.AddTable(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTable);