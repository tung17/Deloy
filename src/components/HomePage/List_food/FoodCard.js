import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Config} from '../../../Config/Config';
import { Link } from 'react-router-dom';

const FoodCard = ({Name,Description,Price,Image})=>{
  console.log(Image);
    return(
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={Image} waves />
        <MDBCardBody>
          <MDBCardTitle>{Name}</MDBCardTitle>
          <MDBCardText style={{color:"red"}}>
            {Price}
          </MDBCardText>
          <Link to={`/Detail/${Name}`}><MDBBtn>Đặt món</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    )
}

export default FoodCard;