import React from 'react';
import {Table} from './Table';
import { connect } from 'react-redux';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import {ApiBase} from './../../Service/api';
import {Action} from './../../actions';
import {Loadding} from './../Common/Loading';

class Tables extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    TablesClick(id)
    {
        this.props.TriggerTable(this.props.Tables.table[id],false);
    }

    render()
    {
        const {table,isLoading} = this.props.Tables;
        if(isLoading == undefined || isLoading)
        {
            return(
                <Loadding/>
            );
        };
        const ShowedTable = (table!='')? table.map((item,i)=>{
            return(
                <Table
                    key={i}
                    ID = {i}
                    Status={item.Status}
                    STT={item.STT}
                    TableClick = {this.TablesClick.bind(this)}
                />
			);
        }):[];

        return(
            <MDBCol md="8">
                <MDBRow>
                    {ShowedTable}
                </MDBRow>
            </MDBCol>
        )
    }
}

const MapStateToProps = (state)=>({
    Tables:state.GetTable,
    Test:state.GetTableByIndex
});

const MapDispatchToProps = (dispatch)=>({
    GetTableAll:dispatch(ApiBase.GetApiObject.GetTableAll()),
    TriggerTable:(payload)=>{dispatch(Action.GetTableByIndex(payload))}
});

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Tables);