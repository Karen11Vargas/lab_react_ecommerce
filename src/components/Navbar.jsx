import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from '../context/CardContext';

const leftRoutes  = [
    {to: '/',text:'All'},
    {to: '/clothes',text: 'Clothes',},
    {to: '/electronics',text: 'Electronics'},
    {to: '/toys',text: 'Toys'},
    {to: '/others',text: 'Others'}
];

const rightRoutes = [
    { to: '/my-account', text: 'My Account' },
    { to: '/my-order', text: 'My Order' },
    { to: '/signing', text: 'Sign In' }
    ];

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-norma top-0">
           <ul className="flex items-center gap-3">
                <li><NavLink to='/' className="font-bold text-lg">Shopi</NavLink></li>
                {leftRoutes.map(route => (
                    <li key={route.text}>
                        <NavLink to={route.to}
                            className={ ({ isActive }) =>
                                `${isActive ? 'underline underline-offset-4' : ''}` }>
                                {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center gap-3">
                {rightRoutes.map(route => (
                    <li key={route.to}>
                    <NavLink to={route.to} className={({ isActive }) =>
                        `${isActive ? 'underline underline-offset-4' : ''}`}>
                       {route.text}</NavLink>
                    </li>
                ))}
                 <li className='flex items-center'>
                 <ShoppingBagIcon onClick={context.openCheckout} className='h-6 w-5 cursor-pointer' / >
                 <div>{context.cardProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;