import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/CardContext';

const OrderCard  = props =>{
    const { id, title, imageUrl, price, quantity, isOrder} = props
    const { deleteProductToCard }  = useContext(ShoppingCartContext);

    let icon 

    if (!isOrder) {
        icon = <XMarkIcon onClick={() =>deleteProductToCard(id) } className='h-6 w-6 cursor-pointer'/>
    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex gap-2 items-center">
                <p className='text-xs font-light'>{quantity}</p>
                <figure className='w-20 h-20'>
                    <img className='w-full h-ful rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-xs font-light'>{title}</p>
               

            </div>
            <div className="flex gap-2 items-center">
                <p className='text-lg font-medium'>${price * quantity}</p>
                {icon}
            </div>

           
        </div>
    );
}

export default OrderCard