import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';
import { UserValidate } from '../../Service/UserValidate';
import {Action} from './../../actions';
import {ApiBase} from './../../Service/api';


class Register extends React.Component
{
    constructor(props)
    {
        super(props);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    async HandleSubmit(event)
    {
        event.preventDefault();
        let DataValid = await UserValidate('',this.Email.value,this.Name.value,this.Pass.value);
        console.log(DataValid);
        this.props.UserValidateAction(DataValid);
        if(this.props.UserValid.UserValidate.ResultRegister)
        {
            const data = new FormData();
            data.append('Avarta',this.Image.files[0]);
            data.append('Name', this.Name.value);
            data.append('Address', this.Address.value);
            data.append('Email',this.Email.value);
            data.append('Pass',this.Pass.value);
            console.log(this.Address.value);
            this.props.CreateUserAction(data);
            alert("Dang ki thanh cong");
            window.location.reload();
        }
    }
    render()
    {
        const Validate = {
            NameValid:"",
            PassValid:"",
            EmailValid:""
        }
        if (this.props.UserValid.UserValidate != null && this.props.UserValid.UserValidate != undefined) {
            Validate.NameValid = this.props.UserValid.UserValidate.ValidateName + this.props.UserValid.UserValidate.Validate;
            Validate.PassValid = this.props.UserValid.UserValidate.ValidatePass;
            Validate.EmailValid = this.props.UserValid.UserValidate.ValidateEmail;
        }
        return(
            <MDBModal isOpen={this.props.Toggle.isRegisterToggle} toggle={()=>this.props.toggle(!this.props.Toggle.isRegisterToggle)}>
                <MDBModalHeader toggle={()=>this.props.toggle(false)}>DANG KY</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                    <MDBCol md="12">
                        <form
                        onSubmit={this.HandleSubmit}>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Username
                            </label>
                            <input
                                type="text"
                                ref={(ref)=>{this.Name = ref}}
                                id="defaultFormLoginEmailEx"
                                className="form-control"
                            />
                            <div>
                                {Validate.NameValid}
                            </div>
                            <br />
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Password
                            </label>
                            <input
                                type="text"
                                ref={(ref)=>{this.Pass = ref}}
                                id="defaultFormLoginEmailEx"
                                className="form-control"
                            />
                            <div>
                                {Validate.PassValid}
                            </div>
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Address
                            </label>
                            <input
                                type="text"
                                ref={(ref)=>{this.Address = ref}}
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
                            />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Email
                            </label>
                            <input
                                type="text"
                                ref={(ref)=>{this.Email = ref}}
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
                            />
                            <div>
                                {Validate.EmailValid}
                            </div>
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Image
                            </label>
                            <input
                                type="file"
                                ref={(ref)=>{this.Image = ref}}
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
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

const MapStateToProps = (state)=>({
    UserValid:state.Validate,
    Toggle:state.IsOpen
});

const MapDispatchToProps = (dispatch)=>({
    UserValidateAction:(payload)=>dispatch(Action.ValidateUserAction(payload)),
    toggle:(payload)=>dispatch(Action.ToggleRegister(payload)),
    CreateUserAction:(payload)=>dispatch(ApiBase.PostApiObject.AddUser(payload))
});

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Register);