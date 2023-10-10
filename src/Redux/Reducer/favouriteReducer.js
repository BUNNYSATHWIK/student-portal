const initialData = [
]


function favouriteReducer(state=initialData, action){
    if(action.type == "FAV_STUDENT"){
        state.push(action.payload)
    }

    return state
}

export default favouriteReducer