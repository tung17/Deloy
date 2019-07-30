const GetDataFood = (state={},action)=>{
    switch (action.type)
    {
        case "GetFood":
            {
                if(action.payload!= undefined && action.payload!= null && action.payload.length > 0) action.isLoading = false;
                return Object.assign({},{
                    foods:action.payload,
                    isLoading:action.isLoading
                })
            }
        default:
        return state;
    }
}

const GetFoodDetail = (state={},action)=>{
    switch (action.type)
    {
        case "GetFoodDetail":
        return Object.assign({},{
            foods:action.payload,
            isLoading:action.isLoading
        })
        default:
        return state;
    }
}

const LoadFood = (state={index:6},action)=>
{
    switch(action.type)
    {
        case "LoadFoodAction":
        {

            return Object.assign({},{
                index:action.payload
            });
        }
        default:
        return state;
    }
}

const AddDataFood = (state={},action)=>{
    switch (action.type)
    {
        case "AddFood":
        return{
            foods:action.result,
            isLoading:action.isLoading
        }
        default:
        return state;
    }
}

export const DeleteDataFood = (state={},action)=>{
    switch (action.type)
    {
        case "DeleteFood":
        return{
            foods:action.result,
            isLoading:action.isLoading
        }
        default:
        return state;
    }
}

export const FoodReduccer = {
    GetDataFood,
    GetFoodDetail,
    LoadFood,
    AddDataFood,
    DeleteDataFood
}