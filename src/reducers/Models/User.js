const GetUser = (state={},action)=>{
    switch (action.type)
    {
        case "GetUser":
        return Object.assign({},{
            user:action.payload,
            isLoading:action.isLoading
        });
        default:
        return state;
    }
}


const Login = (state={},action)=>{
    switch (action.type)
    {
        case "GetUser":
            {
                if(action.payload!= undefined && action.payload!= null && action.payload.length > 0) action.isLoading = false;
                return{
                    users:action.user,
                    isLoading:action.isLoading
                }
            }
        default:
        return state;
    }
}

export const UserReduccer = {
    GetUser,
    Login
}