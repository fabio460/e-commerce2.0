import { combineReducers } from "redux";
import IndicePaginacaoReducer from './IndicePaginacaoReducer'
import SearchReducer from "./SearchReducesr";
import ListaReducer from "./ListaReducer";
import CarrinhoDeComprasReducer from "./CarrinhoDeCompraReducer";
export default combineReducers({
    IndicePaginacaoReducer,
    SearchReducer,
    ListaReducer,
    CarrinhoDeComprasReducer
})