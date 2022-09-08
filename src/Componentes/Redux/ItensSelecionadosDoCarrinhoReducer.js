const inicial = {
    selecionados:[]
}

const ItensSelecionadosDoCarrinho = (state=inicial,action)=>{
    switch (action.type) {
        case 'ItensSelecionadosDoCarrinho':
            return {...state,
                selecionados:action.payload.selecionados,
            }
        default:
            break;
    }
    return state
}

export default ItensSelecionadosDoCarrinho