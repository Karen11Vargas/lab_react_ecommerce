import { useEffect, useState } from "react";
import Card from "../components/Card";
function Home() {
    // Crear estado con la data
    const [items, setItems] = useState(null)

    // Efecto para consumir la api
    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
        } catch (error) {
            console.error(error)
        }
      
    },[])

    return (  
        <>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
                items?.map(item => (
                    < Card key={item.id} data={item}/>
                ))
            } 
       
        </div>
      
        </>
          
      
    );
}

export default Home;