import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/products"

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({children}) =>{
   
    // Estados globales
    const [account, setAccount] = useState({})
    const [signOut, setSignOut] = useState(true)

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

    // Get Products
    const [items, setItems] = useState(null)

    // Efecto para consumir la api
    useEffect(() => {

        const getList = async () =>{
            try {
                const data = await getProducts();
                setItems(data);
            } catch (error) {
                console.error(error)
            }
        }

        getList();
      
    },[])

    const [search, setsearch] = useState('');
    const [category, setCategory] = useState(null);

    const filterProducts = (items, search, category) => {
        return items?.filter(item => {
            const matchTitle = item.title.toLowerCase().includes(search.toLowerCase());

            const matchCategory = category
                ? item.category?.name?.toLowerCase() === category.toLowerCase()
                : true;

            return matchTitle && matchCategory;
        });
    };

    const filteredItems = filterProducts(items, search, category);

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
                    order,
                    items,
                    setItems,
                    search, 
                    setsearch,
                    filteredItems,
                    category,
                    setCategory,
                    account,
                    setAccount,
                    signOut,
                    setSignOut

                }
            }>
            {children}
        </ShoppingCartContext.Provider>

    )
}