import React from 'react';
import {MDBFormInline} from "mdbreact";
import { connect } from 'react-redux';
import {ApiBase} from './../../Service/api';
import { Link } from 'react-router-dom';
import { MDBBtn } from "mdbreact";
import './css/style.css';

class Search extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            SearchResult:[]
        }
    }
    HandleClick(name)
    {
        this.props.GetFoodDetail(name);
    }
    HandleSearch()
    {
        if(this.search.value == "")
        {
            this.setState({
                SearchResult:[]
            });
            return;
        }
        let Data = this.props.Datas.foods.filter(item=>{
            return item.Name.includes(this.search.value);
        });
        console.log(Data);
        this.setState({
            SearchResult:Data
        });
    }
    render()
    {
        console.log(this.state.SearchResult);
        const Result = this.state.SearchResult.map(item=>{
            return(
                <button color="mdb-color" className="Search_button" onClick={()=>{this.HandleClick(item.Name)}}><Link to={`/Detail/${item.Name}`}>{item.Name}</Link></button>
            )
        });
        return(
                <form waves="true">
                    <div>
                        <input className="form-control " 
                        type="text" placeholder="Search" 
                        aria-label="Search"
                        ref={text=>this.search = text}
                        onChange={this.HandleSearch.bind(this)}/>
                    </div>
                    {Result}
                </form>
        )
    }
}

const mapStateToProps = (state) =>({
    Datas:state.GetDataFood,
});

const mapDispatchToProps = (dispatch)=>({
    GetFoodAll:dispatch(ApiBase.GetApiObject.GetFoodAll()),
    GetFoodDetail:(name)=>dispatch(ApiBase.GetApiObject.GetFoodDetail(name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);