import AppRoutes from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import { ShoppingCartContextProvider } from "./context/CardContext"
function App() {
  
   return (
    <>
    <ShoppingCartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
      </ShoppingCartContextProvider>
    </>
  )
}

export default App
