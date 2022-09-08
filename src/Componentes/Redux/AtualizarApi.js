const inicial = {
    atualiza : false
}

const AtualizarApi = (state=inicial,action)=>{
   switch (action.type) {
    case 'atualiza':
        return {...state,
            atualiza:action.payload.atualiza,
           
        }
    default:
        break;
   }
   return state
}
export default AtualizarApi