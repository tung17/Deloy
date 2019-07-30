import {CommentAction} from './Models/Comment';
import {UserAction} from './Models/User';
import {FoodAction} from './Models/Food';
import {OrderAction} from './Models/Order';
import {TableAction} from './Models/Table';
import {TransactionAction} from './Models/Transaction';
import {PageAction} from './Models/Page';
import {LoadingAction} from './Models/Common';
import {SetUserStatus} from './Models/Common';

export const Action = {
    ...CommentAction,
    ...UserAction,
    ...FoodAction,
    ...OrderAction,
    ...TableAction,
    ...TransactionAction,
    ...PageAction,
    LoadingAction,
    SetUserStatus
}