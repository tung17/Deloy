import { combineReducers } from 'redux';
import {TransactionReduccer} from './Models/Transaction';
import {UserReduccer} from './Models/User';
import {FoodReduccer} from './Models/Food';
import {TableReduccer} from './Models/Table';
import {CommentReduccer} from './Models/Comment';
import {CommonReduccer} from './Models/Common';
import {OrderReduccer} from './Models/Order';

export default combineReducers({
    ...CommentReduccer,
    ...UserReduccer,
    ...TableReduccer,
    ...FoodReduccer,
    ...CommonReduccer,
    ...OrderReduccer,
    ...TransactionReduccer
});