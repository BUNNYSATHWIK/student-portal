const initialData = [
    {
        id : 1,
        name: "Atul",
        batch: 1,
        email: "atul.sharma@abilioit.com",
        age: 28
    }
]


function addStuReducer(state = initialData, action) {
    if (action.type == "ADD_STUDENT") {
        state.push(action.payload)
    } 
    else if (action.type == "DELETE_STUDENT") {
        const filterArr = state.filter((val) => {
            return val.id != action.payload

        })
        state = [...filterArr]

    } else if ( action.type == "EDIT_STUDENT"){
        const filterArr = state.filter((val)=>{
            return val.id !=action.payload.id
        })

        filterArr.push(action.payload)
        state = [...filterArr]
    }
    return state
}

export default addStuReducer