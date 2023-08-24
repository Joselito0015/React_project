// import getData from '../../services/asyncMock';
import {getData,getProductData} from '../../services/firebase';
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetails from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom'
import { FidgetSpinner } from 'react-loader-spinner' 


/*
Componente Contenedor
- Recibe como Parametros el id del producto
- Si no hay stock, muestra un mensaje
*/

function ItemDetailContainer (props) {
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(true)
    const {id} = useParams()

    async function getProducts(){
        const response = await getProductData(id)
        console.log(response)
        setLoading(false)

        setProduct(response)
    }

    useEffect(()=>{
        setLoading(true)
        getProducts()
    },[])

    return (
        <div className='container'>
        <h1 className='title'>Detalles del producto</h1>
            {loading ? (
                    <div className="flex-container">
                    <FidgetSpinner backgroundColor="#F4442E"/>
                    </div> 
                ):(
                    <div className="flex-container">
                        {   
                            product.stock===0 ? (
                                <h2>Producto fuera de stock 🥹 ¿Me perdonas?</h2>
                            ):(
                                <ItemDetails  key={product.id} {...product}/>
                            )
                        }
                    </div>
                    )
            }
        </div>
    );
}

export default ItemDetailContainer;