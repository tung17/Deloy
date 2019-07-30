import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, Button,MDBRow
} from "mdbreact";
import { MDBBtn } from "mdbreact";
import Search from '../Search';
import './css/style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Action} from './../../../actions';

class Header extends Component{
    constructor(props)
    {
      super(props);
    }

    componentDidMount()
    {
      if(localStorage.getItem("UserID") != undefined && localStorage.getItem("UserID")!='')
      {
        this.props.ChangeUserStatus("ĐĂNG XUẤT");
        return;
      }
      this.props.ChangeUserStatus("ĐĂNG NHẬP");
    }
    ExcuteSign()
    {
      if(localStorage.getItem("UserID") != undefined && localStorage.getItem("UserID")!='')
      {
        alert("ĐĂNG XUẤT THÀNH CÔNG");
        this.props.ChangeUserStatus("ĐĂNG NHẬP");
        localStorage.removeItem("UserID");
        return;
      }
      this.props.SignIntoggle(true);
    }
    render()
    {
      return(
        <MDBRow>
          <MDBNavbar color="indigo" dark scrolling fixed="top">
            <MDBNavbarToggler onClick={()=>this.props.Toggle(!this.props.IsOpen.isToggle)} left/>
            <MDBNavbarBrand>
              <Link to="/"><strong className="white-text">IOT Resterant</strong></Link>
            </MDBNavbarBrand>
            <MDBCollapse id="navbarCollapse3" isOpen={this.props.IsOpen.isToggle} navbar>
              <MDBNavbarNav left className="Menu">
                <MDBNavItem active>
                  <MDBBtn onClick={()=>this.ExcuteSign()} color="mdb-color">{this.props.UserStatusName.Name}</MDBBtn>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/Cart"><MDBBtn color="mdb-color">GIỎ HÀNG</MDBBtn></Link>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBBtn to="#!" color="mdb-color">ĐẶT BÀN</MDBBtn>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBBtn to="#!" color="mdb-color" onClick={()=>this.props.AddFoodToggle(true)}>THÊM MÓN ĂN</MDBBtn>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBBtn to="#!" color="mdb-color" onClick={()=>this.props.AddTableToggle(true)}>THÊM BÀN ĂN</MDBBtn>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBBtn to="#!" color="mdb-color">QUẢN LÝ</MDBBtn>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
            <MDBNavbarNav right className="Search">
                <MDBNavItem>
                  <Search/>
                </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
        </MDBRow>
      );
    }
}

const mapStateToProps = (state)=>({
    IsOpen:state.IsOpen,
    UserStatusName:state.UserStatusName
});

const mapDispatchToProps = (dispatch)=>({
    Toggle:(payload)=>dispatch(Action.ToggleHeader(payload)),
    SignIntoggle:(payload)=>dispatch(Action.ToggleSignIn(payload)),
    AddFoodToggle:(payload)=>dispatch(Action.ToggleAddFood(payload)),
    AddTableToggle:(payload)=>dispatch(Action.ToggleAddTable(payload)),
    ChangeUserStatus:(payload) => {dispatch(Action.SetUserStatus(payload))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);