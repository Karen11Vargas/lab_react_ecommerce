import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/CardContext';

const  ProductDetail = ()  =>{
    const { isDetailOpen,closeDetail, infoProduct }  = useContext(ShoppingCartContext);

    return ( 
        <aside className={`${isDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black bg-white rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium'>Detail</h2>
                    <XCircleIcon onClick={() => closeDetail()} className='h-6 w-6 cursor-pointer'/>
            </div>
            <figure className='px-6'>
                <img src={infoProduct?.images?.[0]} alt={infoProduct.title} className='w-full h-full rounded-lg'/>
            </figure>
            <p className='flex flex-col p-6 mb-2'>
                <span className='font-medium text-2xl'> {infoProduct.price } </span>
                <span className='font-medium text-md'> ${infoProduct.title } </span>
                <span className='font-light text-sm'> {infoProduct.description } </span>

            </p>
        </aside>
     );
}

export default ProductDetail;