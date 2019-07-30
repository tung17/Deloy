import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBCardImage } from 'mdbreact';
import { MDBRow, MDBCol } from 'mdbreact';

export const Comment = ({Tittle,Content})=>
{
    return(
        <MDBCol md="9">
            <h1>{Tittle}</h1>
            <p>{Content}</p>
        </MDBCol>
    );
}