import {Generator} from './../Generator';

const GetOrder = Generator.ActionGenerator("GetOrder");
const AddOrder = Generator.ActionGenerator("AddOrder");
const DeleteOrder = Generator.ActionGenerator("DeleteOrder");
const PutOrder = Generator.ActionGenerator("PutOrder");

export const OrderAction = {
    GetOrder,
    AddOrder,
    DeleteOrder,
    PutOrder
}
