import OrdersCard from "../components/OrdersCard";
import { ShoppingCartContext } from '../context/CardContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";

function MyOrders() {

    const { order }  = useContext(ShoppingCartContext);

    return (  
        <div>
            <div className="flex w-80 relative justify-center items-center mb-4">
                <h1 className='font-medium'>My Orders</h1>
            </div>
            {
                order.map((o, index) =>(
                    <Link  key={index} to={`/my-orders/${index}`}>
                        <OrdersCard  
                            date={o.date} 
                            totalPrice={o.totalPrice} 
                            totalProducts={o.totalProducts}
                        />
                    </Link>
                   
                ))
            }
        </div>
       
    );
}

export default MyOrders;