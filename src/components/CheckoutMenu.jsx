
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../context/CardContext';
import OrderCard from './OrderCard';
import { totalPrice } from '../utils';
import './styles.css';

const  CheckoutMenu = ()  =>{
    const { isCheckoutOpen,closeCheckout, cardProducts, checkOutOrder }  = useContext(ShoppingCartContext);

    const handleCheckout= ()  =>{
        const date = new Date()
        
        const orderToAdd ={
            date: date.toLocaleDateString(),
            products: cardProducts,
            totalProducts: cardProducts.length,
            totalPrice: totalPrice(cardProducts)
        }

        checkOutOrder(orderToAdd);
       closeCheckout()
    }

    return ( 
        <aside className={`${isCheckoutOpen ? 'flex' : 'hidden'} checkout-detail scrollable-cards flex-col fixed right-0 border border-black bg-white rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium'>My Order</h2>
                    <XCircleIcon onClick={() => closeCheckout()} className='h-6 w-6 cursor-pointer'/>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
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
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>${totalPrice(cardProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button  className='bg-black w-full py-3 text-white rounded-lg cursor-pointer disabled:opacity-50'  disabled={cardProducts.length == 0} onClick={() => handleCheckout()}>Checkout</button>
                </Link>

            </div>
           
        </aside>
     );
}

export default CheckoutMenu;