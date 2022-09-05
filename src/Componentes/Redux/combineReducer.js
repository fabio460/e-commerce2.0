import { combineReducers } from "redux";
import IndicePaginacaoReducer from './IndicePaginacaoReducer'
import SearchReducer from "./SearchReducesr";
export default combineReducers({
    IndicePaginacaoReducer,
    SearchReducer
})