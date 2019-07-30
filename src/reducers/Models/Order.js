const GetOrder = (state={table:null,isLoading:true},action)=>{
    switch (action.type)
    {
        case "GetOrder":
            {
                if(action.payload!= undefined && action.payload!= null && action.payload.length > 0) action.isLoading = false;
                return Object.assign({},{
                    order:action.payload,
                    isLoading:action.isLoading
                });
            }
        default:
        return state;
    }
}

const DeleteOrder = (state={Result:null},action)=>
{
    switch(action.type)
    {
        case "DeleteOrder":
        {
            return Object.assign({},{
                Result:action.payload
            });
        }
        default:
        return state;
    }
}

export const OrderReduccer = {
    GetOrder,
    DeleteOrder
}