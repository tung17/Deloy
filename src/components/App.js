import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Header from './Common/Header/Header';
import Slide from './HomePage/Slide/Slide';
import ListFood from './HomePage/List_food/ListFood';
import SignIn from './Common/SignIn';
import AddFood from './Common/AddFood';
import AddTable from './Common/AddTable';
import Register from './Common/Register';
import {OrderPage} from './OrderPage/OrderPage';
import {CartPage} from './CartsPage/CartsPage';
import { withRouter,Route } from "react-router-dom";
import FoodDetail from './DetailPage/FoodDetail';
import {MDBContainer} from 'mdbreact';

import './HomePage/css/style.css';
const HomePage = ()=>(
	<MDBContainer fluid>
		<Slide/>
		<ListFood/>
		<SignIn/>
		<AddFood/>
		<Register/>
		<AddTable/>
  	</MDBContainer>
);

const DetailPage = (props)=>(
	<MDBContainer>
		<SignIn/>
		<AddFood/>
		<AddTable/>
		<Register/>
		<FoodDetail match={props.match}/>
	</MDBContainer>
)

const OrderPages = (props)=>
(
	<MDBContainer>
		<SignIn/>
		<AddFood/>
		<AddTable/>
		<Register/>
		<OrderPage/>
	</MDBContainer>
);

const CartsPage = (props)=>
(
	<MDBContainer>
		<SignIn/>
		<AddFood/>
		<AddTable/>
		<Register/>
		<CartPage/>
	</MDBContainer>
)

export default class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state ={
			loading:true
		}
	}
	componentDidMount()
	{
		this.demoAsyncCall().then(() => this.setState({ loading: false }));
	}

	demoAsyncCall() {
		return new Promise((resolve) => setTimeout(() => resolve(), 2500));
	  }
	  
	  
	render()
	{
		// const { loading } = this.state;
		// if(loading)
		// {
		// 	return(
		// 		<div>Loadding...</div>
		// 	)
		// }
		const WrappedTable = withRouter(Header);

		return(
			<div>
				<WrappedTable/>
				<Route exact path="/" component={HomePage}/>
				<Route path="/Detail/:name" component={DetailPage}/>
				<Route path="/Order" component={OrderPages}/>
				<Route path="/Cart" component={CartsPage}/>
			</div>
		)
	}
}