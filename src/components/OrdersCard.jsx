import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

const OrdersCard  = props =>{
    const { date, totalPrice, totalProducts} = props


    return (
        <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4">
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <p className='flex items-center'>
                        <CalendarDaysIcon className='h-4 w-4 cursor-pointer'/>
                        <span className='font-light'>{date}</span>
                    </p>
                   
                    <p className='flex items-center'>
                        <ShoppingBagIcon className='h-4 w-4 cursor-pointer'/>
                        <span className='font-light'>{totalProducts} articles</span>

                    </p>
                </div>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 cursor-pointer'/>

                </p>
            </div>
        </div>
    );
}

export default OrdersCard