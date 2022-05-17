export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ClEAR_DISPLAY = "ClEAR_DISPLAY";
export const MEMORY_ADD = "MEMORY_ADD";
export const  MEMORY_APPLY ="MEMORY_APPLY";
export const MEMORY_RESET = "MEMORY_RESET"


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const  changeOperation = (operation) => {
    
    return({type:CHANGE_OPERATION, payload: operation});

}
export const clearDisplay=()=>{
    return({type: ClEAR_DISPLAY });
}
export const addMemory=()=>{
    return({type: MEMORY_ADD});
}
export const applyMemory = () =>{
    return ({type:MEMORY_APPLY})
}
export const memoryReset = ()=>{
    return ({type:MEMORY_RESET})
}
