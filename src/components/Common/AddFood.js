import React from 'react';
import {Action} from './../../actions';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol } from 'mdbreact';
import {ApiBase} from './../../Service/api';
import { FoodValidate } from '../../Service/FoodValidate';
import {Loadding} from './../Common/Loading';

class AddFood extends React.Component
{
    constructor(props)
    {
        super(props);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    async HandleSubmit(event)
    {
        event.preventDefault();
        let DataValid = await FoodValidate(this.Name.value,this.Price.value);
        this.props.FoodValidAction(DataValid);
        const data = new FormData();
        console.log(this.props.FoodValid);
		data.append('ImageFood', this.Image.files[0]);
		data.append('Name', this.Name.value);
		data.append('Price',this.Price.value);
        data.append('Description',this.DESCRIPTION.value);
        console.log(this.props.FoodValid.FoodValidate.ResultValidFood);
        if(this.props.FoodValid.FoodValidate.ResultValidFood)
        {
            await this.props.AddFoodAction(data);
            window.location.reload();
        }
    }

    render()
    {
        let FoodNameValid;
        let PriceValid;
        if (this.props.FoodValid.FoodValidate != null && this.props.FoodValid.FoodValidate != undefined) {
            FoodNameValid = this.props.FoodValid.FoodValidate.ValidateName;
            PriceValid = this.props.FoodValid.FoodValidate.ValidatePrice;
        }
        return(
                <MDBModal isOpen={this.props.Toggle.isAddFoodToggle} toggle={()=>this.props.toggle(!this.props.Toggle.isAddFoodToggle)}>
                <MDBModalHeader toggle={()=>this.props.toggle(!this.props.Toggle.isAddFoodToggle)}>THÊM MÓN ĂN</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                    <MDBCol md="12">
                        <form
                        onSubmit={this.HandleSubmit}>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                FOODNAME
                            </label>
                            <input
                                type="text"
                                ref={(ref)=>{this.Name = ref}}
                                id="defaultFormLoginEmailEx"
                                className="form-control"
                            />
                            <div>
                                {FoodNameValid}
                            </div>
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                PRICE
                            </label>
                            <input
                                type="text"
                                ref={(ref)=>{this.Price = ref}}
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
                            />
                            <div>
                                {PriceValid}
                            </div>
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                DESCRIPTION
                            </label>
                            <input
                                type="text"
                                ref={(ref)=>{this.DESCRIPTION = ref}}
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
                            />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                IMAGE
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

const mapStateToProps = (state)=>({
    FoodValid:state.Validate,
    Toggle:state.IsOpen,
    AddDataFood:state.AddDataFood
});

const mapDispatchToProps = (dispatch)=>({
    toggle:(payload)=>dispatch(Action.ToggleAddFood(payload)),
    FoodValidAction:(payload)=>dispatch(Action.ValidateFoodAction(payload)),
    AddFoodAction:(filter)=>dispatch(ApiBase.PostApiObject.AddFood(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddFood);