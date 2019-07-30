import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';
import {Action} from './../../actions';
import {ApiBase} from './../../Service/api';
import {UserValidate} from './../../Service/UserValidate';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.SignInCommand = this.SignInCommand.bind(this);
  }

  async SignInCommand() {
    let data = await UserValidate("", "", this.Name.value, this.Pass.value)
    this.props.ValidateCommand(data);
    if (this.props.Validate.data.ResultSignIn)
    {
      await this.props.SignInAction(this.Name.value, this.Pass.value);
      alert("Đang nhập thành công");
      this.props.toggle(false);
      this.props.ChangeUserStatus("ĐĂNG XUẤT");
    }
  }

  render() {
    let UserNameValid;
    let PassValid;
    if (this.props.Validate.data != null && this.props.Validate.data != undefined) {
      UserNameValid = this.props.Validate.data.ValidateName;
      PassValid = this.props.Validate.data.ValidatePass
    }
    return (
        <MDBModal isOpen={this.props.Modal.isSignIn} toggle={() => this.props.toggle(!this.props.Modal.isSignIn)}>
          <MDBModalHeader toggle={() => this.props.toggle(!this.props.Modal.isSignIn)}>SIGN IN</MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBCol md="12">
                <form>
                  <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                    UserName
                  </label>
                  <input
                    type="text"
                    ref={(ref) => { this.Name = ref }}
                    id="defaultFormLoginEmailEx"
                    className="form-control"
                  />
                  <div>
                    {UserNameValid}
                  </div>
                  <br />
                  <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                    Your password
                  </label>
                  <input
                    type="password"
                    ref={(ref) => { this.Pass = ref }}
                    id="defaultFormLoginPasswordEx"
                    className="form-control"
                  />
                  <div>
                    {PassValid}
                  </div>
                  <MDBBtn color="primary" onClick={this.SignInCommand}>Login</MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" onClick={() => this.props.toggleRegister(true)}>Don't have account</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
    );
  }
}

const mapStateToProps = (state) => ({
  Modal: state.IsOpen,
  Validate: state.Validate
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (payload) => dispatch(Action.ToggleSignIn(payload)),
  toggleRegister:(payload)=>dispatch(Action.ToggleRegister(payload)),
  SignInAction: (name, pass) => dispatch(ApiBase.GetApiObject.LoginCommand(name, pass, dispatch)),
  ValidateCommand: (payload) => dispatch(Action.ValidateAction(payload)),
  ChangeUserStatus:(payload) => {dispatch(Action.SetUserStatus(payload))}
});

//nếu gọi dispatch ở đây thì function run trước khi click(dispatch(function))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);