import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBCardImage } from 'mdbreact';
import { MDBRow, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';

export const User = ({Image,Name}) => {
    return(
        <MDBCol sm="3" className="UserInfo">
            <MDBCardImage className="img-fluid UserInfoImage" src={Image}></MDBCardImage>
            <h4 className="UserInfoName">{Name}</h4>
        </MDBCol>
    );
}