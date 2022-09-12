const inicial = {
    lista : []
}

const listaCarrinhoDeComprasReducer = (state=inicial,action)=>{
    switch (action.type) {
        case 'listaDoCarrinho':
            return {...state,lista:action.payload.lista}
        default:
            break;
    }
    return state
}

export default listaCarrinhoDeComprasReducer