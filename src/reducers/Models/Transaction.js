const AddTransaction = (state={},action)=>{
    switch (action.type)
    {
        case "AddTransaction":
        return{
            transactions:action.result,
            isLoading:action.isLoading
        }
        default:
        return state;
    }
}

export const TransactionReduccer = {
    AddTransaction
}