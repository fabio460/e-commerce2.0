const inicial = {
    total:0
}

const valorTotalReducer = (state=inicial,action)=>{
    switch (action.type) {
        case 'total':
            return {...state,total:action.payload.total}
            break;
    
        default:
            break;
    }
    return state
}

export default valorTotalReducer