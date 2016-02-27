import {combineReducers} from "redux";
import * as ModalReducer from '../modal/modal.reducer';

export default combineReducers({
    modalReducer: ModalReducer.reduce
});
