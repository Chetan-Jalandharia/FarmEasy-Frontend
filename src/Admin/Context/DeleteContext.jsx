import { createContext, useState } from "react";
const deleteContext = createContext()


const MultiDelete = (props) => {
    const [List,setList]=useState([])
    return (
        <deleteContext.Provider value={{List,setList}}>
            {props.children}
        </deleteContext.Provider>
    )
}

export default MultiDelete ;
export  { deleteContext };