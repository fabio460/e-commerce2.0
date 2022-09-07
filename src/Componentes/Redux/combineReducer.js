import { combineReducers } from "redux";
import IndicePaginacaoReducer from './IndicePaginacaoReducer'
import SearchReducer from "./SearchReducesr";
import ListaReducer from "./ListaReducer";
export default combineReducers({
    IndicePaginacaoReducer,
    SearchReducer,
    ListaReducer
})