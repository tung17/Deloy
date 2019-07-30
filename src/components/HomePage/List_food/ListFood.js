import React from 'react';
import FoodCard from './FoodCard';
import { connect } from 'react-redux';
import {Action} from '../../../actions';
import { MDBBtn,MDBRow} from 'mdbreact';
import { MDBAnimation } from "mdbreact";
import {ApiBase} from './../../../Service/api';
import {Loadding} from './../../Common/Loading';

class ListFood extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        const {foods,isLoading} = this.props.Data;
        let Active = 'ActiveLoadFood';
        if(isLoading == undefined || isLoading)
        {
            return(
                <Loadding/>
            );
        }
        if(foods.length <= this.props.LoadIndex.index) Active='HiddenLoadFood';
        const data = foods.slice(0,this.props.LoadIndex.index);
        if(data.length == 0)
        {
            return(
                <div>
                    Khong co du lieu
                </div>
            )
        }
        const ShowedData = data.map((food,i)=>
            <MDBAnimation type="rotateInUpRight wow" key={i}>
                <FoodCard
                    Name = {food.Name}
                    Description = {food.Description}
                    Image = {food.Image}
                    Price={food.Price}
                />
            </MDBAnimation>
        );
        return(
            <MDBRow>
                {ShowedData}
                <MDBBtn className={Active} onClick={()=>this.props.LoadFoodCommand(this.props.LoadIndex.index + 6)}>Get More</MDBBtn>
            </MDBRow>
        )
    }
}
const mapStateToProps = (state) =>({
    Data:state.GetDataFood,
    LoadIndex: state.LoadFood
});

const mapDispatchToProps = dispatch => ({
    GetFood:(payload)=>dispatch(ApiBase.GetApiObject.GetFoodAll(payload)),
    LoadFoodCommand:(payload)=>{dispatch(Action.LoadFoodAction(payload))}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListFood);
