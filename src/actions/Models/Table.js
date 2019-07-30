import {Generator} from './../Generator';

const AddTable = Generator.ActionGenerator("AddTable");
const DeleteTable = Generator.ActionGenerator("DeleteTable");
const ToggleAddTable = Generator.ActionGenerator2("ToggleAddTable");
const GetTable = Generator.ActionGenerator("GetTable");
const GetTableByIndex = Generator.ActionGenerator2("GetTableByIndex");

export const TableAction = {
    AddTable,
    DeleteTable,
    ToggleAddTable,
    GetTable,
    GetTableByIndex
}
