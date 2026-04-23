import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from '../context/CardContext'

const leftRoutes = [
  { to: '/', text: 'All' },
  { to: '/category/clothes', text: 'Clothes' },
  { to: '/category/electronics', text: 'Electronics' },
  { to: '/category/toys', text: 'Toys' },
  { to: '/category/others', text: 'Others' }
]

const publicRoutes = [
  { to: '/signing', text: 'Sign In' }
]

const privateRoutes = [
  { to: '/my-account', text: 'My Account' },
  { to: '/my-orders', text: 'My Orders' }
]

const Navbar = () => {
  const context = useContext(ShoppingCartContext)

  const account = localStorage.getItem('account')
  const parsedAccount = account ? JSON.parse(account) : null

  const hasUserAnAccount = parsedAccount && Object.keys(parsedAccount).length > 0
  const isUserSignedOut = context.signOut || !hasUserAnAccount

  const routesToShow = isUserSignedOut ? publicRoutes : privateRoutes

  const handleSignOut = () => {
    localStorage.removeItem('account')
    localStorage.setItem('sign-out', JSON.stringify(true))
    context.setAccount({})
    context.setSignOut(true)
  }

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-normal top-0">
      <ul className="flex items-center gap-3">
        <li>
          <NavLink to='/' className="font-bold text-lg">
            Shopi
          </NavLink>
        </li>

        {leftRoutes.map(route => (
          <li key={route.text}>
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-4' : ''
              }
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        {routesToShow.map(route => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-4' : ''
              }
            >
              {route.text}
            </NavLink>
          </li>
        ))}

        {!isUserSignedOut && (
          <li>
            <button onClick={handleSignOut}>
              Sign Out
            </button>
          </li>
        )}

        <li className='flex items-center'>
          <ShoppingBagIcon
            onClick={context.openCheckout}
            className='h-6 w-5 cursor-pointer'
          />
          <div>{context.cardProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar