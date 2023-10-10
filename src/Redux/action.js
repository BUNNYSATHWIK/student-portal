export const addStudent = (data) =>{
    return {
        type:"ADD_STUDENT",
        payload : data
    }
}

export const favStudent = (data) =>{
    return {
        type:"FAV_STUDENT",
        payload : data
    }
}

export const deleteStudent =(id)=>{
    return{
        type:"DELETE_STDENT",
        payload:id
    }
}

export const editStudent =(data)=>{
    return{
        type:"EDIT_STDENT",
        payload:id
    }
}