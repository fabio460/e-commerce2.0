import { combineReducers } from "redux";
import IndicePaginacaoReducer from './IndicePaginacaoReducer'
import SearchReducer from "./SearchReducesr";
import ListaReducer from "./ListaReducer";
import CarrinhoDeComprasReducer from "./CarrinhoDeCompraReducer";
import ItensSelecionadosDoCarrinho from "./ItensSelecionadosDoCarrinhoReducer";
import AtualizarApi from "./AtualizarApi";
import valorTotalReducer from "./valorTotalReducer";
import listaCarrinhoDeComprasReducer from "./listaCarrinhoReducer";
import loginReducer from "./loginReducer";
export default combineReducers({
    IndicePaginacaoReducer,
    SearchReducer,
    ListaReducer,
    CarrinhoDeComprasReducer,
    ItensSelecionadosDoCarrinho,
    AtualizarApi,
    valorTotalReducer,
    listaCarrinhoDeComprasReducer,
    loginReducer
})