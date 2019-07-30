import {Generator} from './../Generator';

const GetComment = Generator.ActionGenerator("GetComment");
const AddComment = Generator.ActionGenerator("ActionComment");
const DeleteComment = Generator.ActionGenerator("DeleteComment");

export const CommentAction = {
    GetComment,
    AddComment,
    DeleteComment
}
