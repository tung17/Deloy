const Validate = (state={},action)=>{
    switch(action.type)
    {
        case "ValidateAction":
        return Object.assign({},{
            data:action.payload,
        });
        case "ValidateFood":
        return Object.assign({},{
            FoodValidate:action.payload,
        });
        case "ValidateUser":
        return Object.assign({},{
            UserValidate:action.payload
        });
        default:
        return state;
    }
}

const IsOpen =(state={isToggle:false},action)=>{
    switch (action.type)
    {
        case "ToggleHeader":
        {
            return Object.assign({},{
                isToggle:action.payload
            })
        }
        case "ToggleSignIn":
        {
            return Object.assign({},{
                isSignIn:action.payload
            })
        }
        case "ToggleAddFood":
        {
            return Object.assign({},{
                isAddFoodToggle:action.payload
            })
        }
        case "ToggleAddTable":
        {
            return Object.assign({},{
                isAddTableToggle:action.payload
            })
        }
        case "ToggleRegister":
        {
            return Object.assign({},{
                isRegisterToggle:action.payload
            })
        }
        case "ToggleUpdateCard":
        {
            return Object.assign({},{
                isUpdateCardToggle:action.payload
            })
        }
        default:
        return state;
    }
}

const IsLoading =(state={isLoading:true},action)=>
{
    switch (action.type)
    {
        case "LoadingEvent":
            return Object.assign({},{isLoading:action.isLoading})
        default:
            return state;
    }
}

const UserStatusName = (state={Name:"ĐĂNG NHẬP"},action)=>
{
    switch (action.type)
    {
        case "SetUserStatus":
            return Object.assign({},{Name:action.payload});
        default:
            return state;
    }
}

export const CommonReduccer = {
    Validate,
    IsOpen,
    IsLoading,
    UserStatusName
}