import {Generator} from './../Generator';

const ToggleHeader = Generator.ActionGenerator2("ToggleHeader");
const ToggleSignIn = Generator.ActionGenerator2("ToggleSignIn");
const ToggleRegister = Generator.ActionGenerator2("ToggleRegister");
const ToggleUpdateCard = Generator.ActionGenerator2("ToggleUpdateCard");
const ValidateAction = Generator.ActionGenerator2("ValidateAction");

export const PageAction = {
    ToggleHeader,
    ToggleSignIn,
    ToggleRegister,
    ToggleUpdateCard,
    ValidateAction
}