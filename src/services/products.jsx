// Funciones de consumos

const getProducts = async () =>{
    try {
       const response = await  fetch('https://api.escuelajs.co/api/v1/products')
       if (!response.ok) {
            throw new Error(`Error ${response.status}`);
            
       }
       const data = await response.json()
       return data
       
    } catch (error) {
        console.error(error)
    }
}

export {getProducts};