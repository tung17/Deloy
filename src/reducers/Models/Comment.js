const GetComment = (state={},action)=>{
    switch (action.type)
    {
        case "GetComment":
        return Object.assign({},{
            comment:action.payload,
            isLoading:action.isLoading
        })
        default:
        return state;
    }
};

export const CommentReduccer = {
    GetComment
}