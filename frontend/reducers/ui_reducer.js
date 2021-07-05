import { combineReducers } from "redux";
import filtersReducer from "./filters_reducer";
import loadingReducer from "./loading_reducer";
import modalReducer from "./modal_reducer";


const uiReducer = combineReducers({
    modal: modalReducer,
    loading: loadingReducer,
    filters: filtersReducer
});

export default uiReducer;