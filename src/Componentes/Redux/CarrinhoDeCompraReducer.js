const inicial = {
    tamanhoDoCarrinho : 0
}

const CarrinhoDeComprasReducer = (state=inicial,action)=>{
    switch (action.type) {
        case 'tamanhoDoCarrinho':
            return {...state,tamanhoDoCarrinho:action.payload.tamanhoDoCarrinho}
        default:
            break;
    }
    return state
}

export default CarrinhoDeComprasReducer