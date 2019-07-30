import {Generator} from './../Generator';

const ToggleAddFood = Generator.ActionGenerator2("ToggleAddFood");
const ValidateFoodAction = Generator.ActionGenerator2("ValidateFood");
const LoadFoodAction = Generator.ActionGenerator2("LoadFoodAction");
const GetFood = Generator.ActionGenerator("GetFood");
const GetFoodDetail = Generator.ActionGenerator("GetFoodDetail");
const AddFood = Generator.ActionGenerator("AddFood");
const DeleteFood = Generator.ActionGenerator("DeleteFood");

export const FoodAction = {
    ToggleAddFood,
    ValidateFoodAction,
    LoadFoodAction,
    GetFood,
    GetFoodDetail,
    AddFood,
    DeleteFood
}

