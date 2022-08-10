const inicial = {
    inicio:0,
    fim:8,
    lista:0
}

const IndicePaginacaoReducer = (state=inicial,action)=>{
   switch (action.type) {
    case 'indice':
        return {...state,
           inicio:action.payload.inicio,
           fim:action.payload.fim,
           lista:action.payload.lista
        }
    default:
        break;
   }
   return state
}
export default IndicePaginacaoReducer