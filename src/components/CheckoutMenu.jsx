
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/CardContext';
import OrderCard from './OrderCard';

import './styles.css';

const  CheckoutMenu = ()  =>{
    const { isCheckoutOpen,closeCheckout, cardProducts }  = useContext(ShoppingCartContext);

    return ( 
        <aside className={`${isCheckoutOpen ? 'flex' : 'hidden'} checkout-detail scrollable-cards flex-col fixed right-0 border border-black bg-white rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium'>My Order</h2>
                    <XCircleIcon onClick={() => closeCheckout()} className='h-6 w-6 cursor-pointer'/>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    cardProducts.map(product => (
                        <OrderCard 
                            key ={product.id}
                            id = {product.id}
                            title = {product.title} 
                            imageUrl = {product.images} 
                            price = {product.price} 
                            quantity = {product.quantity} 
                            />
                    ))
                }
            </div>
           
        </aside>
     );
}

export default CheckoutMenu;