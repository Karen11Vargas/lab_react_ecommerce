import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({children}) =>{
   

   // Estado de carrito ° Contador
   const [cardProducts, setcardProducts] = useState([])
   const [count, setCount] = useState(0)


    // Detail Producto ° Open / Close Detail
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const openDetail = () => setIsDetailOpen(true)
    const closeDetail = () => setIsDetailOpen(false)

    //  Detail Producto  ° Detail Producto
    const [infoProduct, setinfoProduct] = useState({})

    // Checkout Menu ° Open / Close 
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
    const openCheckout = () => setIsCheckoutOpen(true)
    const closeCheckout = () => setIsCheckoutOpen(false)
    const [order, setOrder] = useState([])

    // Checkout Order
    const checkOutOrder = (products) =>{
        setOrder([...order, products]);
        setcardProducts([])
        setCount(0)
    }


    const showDetailProduct  = (productData) =>{
        closeCheckout();
        openDetail();
        setinfoProduct(productData);
    }

    const addProductToCard = (productData) =>{
        closeDetail();

        // Verificar si el producto ya esta en el carrito
        const productExist = cardProducts.some(i => i.id === productData.id);

        if (productExist) {
            const findProduct = cardProducts.find(i => i.id == productData.id);
            findProduct.quantity += 1;
            
        }else{
            productData.quantity = 1
            setcardProducts([...cardProducts, productData]);

        }
        openCheckout();
        setCount(count + 1)
        
    }

    const deleteProductToCard = (idProduct) =>{
        const filterProduct = cardProducts.filter(i => i.id != idProduct )
        setcardProducts(filterProduct);
    }



    return(
        <ShoppingCartContext.Provider value={
                {
                    count, 
                    setCount,
                    isDetailOpen,
                    openDetail,
                    closeDetail,
                    infoProduct,
                    showDetailProduct,
                    cardProducts,
                    addProductToCard,
                    isCheckoutOpen,
                    openCheckout,
                    closeCheckout,
                    deleteProductToCard,
                    checkOutOrder,
                    order

                }
            }>
            {children}
        </ShoppingCartContext.Provider>

    )
}