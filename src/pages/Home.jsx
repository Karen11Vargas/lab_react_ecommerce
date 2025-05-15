import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getProducts } from "../services/products"
import ProductDetail from "../components/ProductDetail";

function Home() {
    // Crear estado con la data
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

    return (  
        <>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
                items?.map(item => (
                    < Card key={item.id} data={item}/>
                ))
            } 
       
        </div>
        
        <ProductDetail />   
        </>
          
      
    );
}

export default Home;