import { combineReducers } from "redux";
import loadingReducer from "./loading_reducer";
import modalReducer from "./modal_reducer";


const uiReducer = combineReducers({
    modal: modalReducer,
    loading: loadingReducer
});

export default uiReducer;