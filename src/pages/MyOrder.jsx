
import { ShoppingCartContext } from '../context/CardContext';
import { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";

function MyOrder() {
    const { order }  = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if (index === 'last') index = order?.length -1
    
    return (  
        <div>
            <div className="flex w-80 relative justify-center items-center mb-6">
                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className='h-6 w-6 cursor-pointer'/>
                </Link>
                <h1 className='font-medium'>My Order</h1>
            </div>
            <div className='flex flex-col w-80'>
                {
                    order?.[index]?.products.map(product => (
                        <OrderCard 
                            key ={product.id}
                            id = {product.id}
                            title = {product.title} 
                            imageUrl = {product.images} 
                            price = {product.price} 
                            quantity = {product.quantity} 
                            isOrder
                            />
                    ))
                }

            </div>
             
        </div>
       
    );
}

export default MyOrder;