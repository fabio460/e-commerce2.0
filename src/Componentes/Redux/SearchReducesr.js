const inicial = {
    search:""
}

const SearchReducer = (state=inicial,action)=>{
    switch (action.type) {
        case "search":
            return {...state,search:action.payload.search}
        default:
            break;
    }
    return state
}

export default SearchReducer