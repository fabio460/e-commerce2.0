const inicial = {
    lista:[]
}

const ListaReducer = (state=inicial,action)=>{
    switch (action.type) {
        case 'lista':
            return {...state,lista:action.payload.lista}
        default:
            break;
    }
    return state
}

export default ListaReducer