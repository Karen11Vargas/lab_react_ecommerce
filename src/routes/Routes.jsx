import { useRoutes } from "react-router-dom"
import { ShoppingCartContext } from '../context/CardContext'

import Home from "./../pages/Home"
import MyAccount from "./../pages/MyAccount"
import MyOrder from "./../pages/MyOrder"
import MyOrders from "./../pages/MyOrders"
import SignIn from "./../pages/SignIn"
import NotFound from "./../pages/NotFound"
import { useContext } from "react"

const AppRoutes = ()=> {
  const {signOut} = useContext(ShoppingCartContext)

    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/category/:category", element: <Home /> },
        { path: "/my-account", element: signOut ?  <SignIn /> : <MyAccount />},
        { path: "/my-order", element: signOut ?  <SignIn /> : <MyOrder /> },
        { path: "/my-orders", element:  signOut ?  <SignIn /> : <MyOrders /> },
        { path: "/my-orders/last", element:  signOut ?  <SignIn /> : <MyOrder /> },
        { path: "/my-orders/:id", element: signOut ?  <SignIn /> : <MyOrder /> },
        { path: "/signing", element: <SignIn /> },
        { path: "/*", element: <NotFound /> }
      ])
    return routes;
}

export default AppRoutes;