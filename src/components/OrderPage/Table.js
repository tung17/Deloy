import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

export const Table = ({ID,Status,STT,TableClick})=>
{
    const TableObject = {
        Status:'còn trống'
    };
    if(Status != 0)
    {
        TableObject.Status = 'Đã đặt';
    }
    return(
        <MDBCol md="4">
			<MDBCard className="card-body" style={{ width: "15rem", marginTop: "1rem" }}>
				<MDBCardTitle>Bàn số:{STT}</MDBCardTitle>
				<MDBCardText>{TableObject.Status}</MDBCardText>
                <MDBBtn onClick={()=>TableClick(ID)}>Order</MDBBtn>
			</MDBCard>
		</MDBCol>
    )
}