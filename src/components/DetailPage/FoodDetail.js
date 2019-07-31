import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, 
    MDBCardText, MDBCol,MDBRow,MDBContainer } from 'mdbreact';
import { MDBAnimation } from "mdbreact";
import {ApiBase} from './../../Service/api';
import { connect } from 'react-redux';
import './css/style.css';
import Comments from './Comments';
import { Link } from 'react-router-dom';
import {Loadding} from './../Common/Loading';

class FoodDetail extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        // console.log(this.props.Data);
        this.props.GetFoodDetail(this.props.match.params.name);
    }

    render()
    {
        if(this.props.Data.foods == undefined || this.props.Data.foods == 'undefined'
        || this.props.Data.foods == '')
        {
            return(
                <Loadding/>
            );
        }
        console.log(this.props.Data);
        return(
            <MDBContainer>
                <MDBRow className="Detail">
                    <MDBCol sm="1"></MDBCol>
                    <MDBCol sm="6">
                        <MDBRow>
                            <MDBAnimation type="slideInLeft">
                                <h1>
                                    {this.props.Data.foods[0].Name}
                                </h1>
                            </MDBAnimation>
                            <MDBAnimation type="slideInLeft">
                                <MDBCardImage className="img-fluid" src={this.props.Data.foods[0].Image}></MDBCardImage>
                            </MDBAnimation>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol sm="1"></MDBCol>
                    <MDBCol sm="3">
                        <MDBAnimation type="slideInRight">
                            <MDBRow>
                                <h1 className="Rating">{(this.props.Data.foods[0].Rating!=undefined)?
                                this.props.Data.foods[0].Rating:5}</h1>
                                <br/>
                                <p className="content">{(this.props.Data.foods[0].Description!="")?
                                this.props.Data.foods[0].Description:"Khong co mo ta"}</p>
                                <br/>
                                <Link to="/Order"><MDBBtn className="Order_table">Dat Ban</MDBBtn></Link>
                            </MDBRow>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol sm="1"></MDBCol>
                </MDBRow>
                <MDBAnimation type="slideInUp">
                    <MDBRow>
                        <MDBCol sm="1"></MDBCol>
                        <MDBCol sm="6">
                            <Comments
                                ID={this.props.Data.foods[0]._id}
                            />
                        </MDBCol>
                        <MDBCol sm="3">
                        </MDBCol>
                        <MDBCol sm="1"></MDBCol>
                    </MDBRow>
                </MDBAnimation>
            </MDBContainer>
        )
    }
}

const mapStateToProps = (state)=>({
    Data:state.GetFoodDetail
});

const mapDispatchToProps = (dispatch)=>({
    GetFoodDetail:(name)=>dispatch(ApiBase.GetApiObject.GetFoodDetail(name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodDetail);