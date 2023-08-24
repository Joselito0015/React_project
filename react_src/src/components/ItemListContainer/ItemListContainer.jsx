//item list container component for the item list 
import getData from '../../services/asyncMock';
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
// import ItemDetails from '../ItemDetails/ItemDetails';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom'
import { FidgetSpinner } from 'react-loader-spinner' 


/*
Componente Contenedor
- Recibe como Parametros el id del producto
- Si no recibe id, muestra todos los productos
- Si recibe id, muestra el producto con ese id
- Si recibe category, muestra los productos de esa categoria
- Si no recibe category, muestra todos los productos 
*/

function ItemListContainer (props) {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const {id,category} = useParams()

    async function getProducts(){
        const response = await getData()
        
        setLoading(false)

        //match the id with the id in the url
        if (!id & !category){ 
            setProducts(response)
        }

        if (id){
            const filteredProducts = response.filter((item)=> item.id === Number(id))
            setProducts(filteredProducts)
        }
        
        if (category){
            const filteredProducts = response.filter((item)=> item.category == category)
            setProducts(filteredProducts)
        }
    }

    useEffect(()=>{
        setLoading(true)
        getProducts()
    },[id,category])

    return (
        <div className='container'>
        <h1 className='title'>Listado de Productos</h1>
            {loading ? (
                <div className="flex-container">
                <FidgetSpinner backgroundColor="#F4442E"/>
                </div> 
                ):(
                <div className="flex-container">
                    {
                        products.length === 0 ?
                        (
                            <h1>No hay productos para mostrar</h1>
                        ):(
                        products.map((item) => (
                            <Item  key={item.id} {...item}/>))
                        )
                    }
                </div>)
            }
        </div>
    );
}

export default ItemListContainer;