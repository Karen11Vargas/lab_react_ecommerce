import { useContext, useEffect } from 'react';
import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";
import { ShoppingCartContext } from '../context/CardContext';
import { useParams } from "react-router-dom"

function Home() {
    const { setsearch, filteredItems, setCategory } = useContext(ShoppingCartContext);
    const params = useParams();

    useEffect(() => {
        setCategory(params.category || null);
    }, [params.category]);

    const hasItems = filteredItems && filteredItems.length > 0;

    return (  
        <>
        <div className="flex w-80 relative justify-center items-center mb-6">
            <h1 className='font-medium text-xl'>Exclusive Products</h1>
        </div>
        <input type="text" className="border border-black rounded-lg w-80 p-4 mb-4 focus:outline-none" id="" placeholder='Search a prodcuts' 
        onChange={(event) => setsearch(event.target.value)}/>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {hasItems ? (
                filteredItems.map(item => <Card key={item.id} data={item} />)
            ) : (
                <p className="text-center text-gray-500">No se encontraron productos.</p>
            )}
       
        </div>
        
        <ProductDetail />   
          
        </>
          
      
    );
}

export default Home;