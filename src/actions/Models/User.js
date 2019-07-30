import {Generator} from './../Generator';

const ValidateUserAction = Generator.ActionGenerator2("ValidateUser");
const GetUser = Generator.ActionGenerator("GetUser");
const AddUser = Generator.ActionGenerator("AddUser");
const DeleteUser = Generator.ActionGenerator("DeleteUser");

export const UserAction = {
    ValidateUserAction,
    GetUser,
    AddUser,
    DeleteUser
}