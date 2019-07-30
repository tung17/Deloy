import * as _ from 'lodash';

const GetTable = (state={},action)=>{
    switch (action.type)
    {
        case "GetTable":
            {
                if(action.payload!= undefined && action.payload!= null && action.payload!= ''&& action.payload.length > 0) action.isLoading = false;
                return Object.assign({},{
                    table:action.payload,
                    isLoading:action.isLoading
                });
            }
        default:
        return state;
    }
}


const GetTableByIndex = (state={table:null},action)=>{
    switch (action.type)
    {
        case "GetTableByIndex":
        return Object.assign({},{
            table:action.payload,
            isLoading:action.isLoading
        });
        default:
        return state;
    }
}

const AddDataTable = (state={},action)=>{
    switch (action.type)
    {
        case "AddTable":
        return{          
            tables:action.result,
            isLoading:action.isLoading
        }
        default:
        return state;
    }
}

export const TableReduccer = {
    GetTable,
    GetTableByIndex,
    AddDataTable
}