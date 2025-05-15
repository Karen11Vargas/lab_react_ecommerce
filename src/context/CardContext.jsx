import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({children}) =>{
    const [count, setCount] = useState(0)

    // Open / Close Detail
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const toggleProductDetal = () => setIsDetailOpen(!isDetailOpen)

    // Detail Producto
    const [infoProduct, setinfoProduct] = useState({})

    const incrementCar = () =>{
        setCount(count + 1)
    }


    return(
        <ShoppingCartContext.Provider value={{count, setCount, incrementCar,isDetailOpen, toggleProductDetal,infoProduct,setinfoProduct }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}