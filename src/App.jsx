import AppRoutes from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import { ShoppingCartContextProvider } from "./context/CardContext"
import CheckoutMenu from "./components/CheckoutMenu";

function App() {
  
   return (
    <>
    <ShoppingCartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <CheckoutMenu />
      </BrowserRouter>
      </ShoppingCartContextProvider>
    </>
  )
}

export default App
