//item list container component for the item list 
import getData from '../../services/asyncMock';
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemDetails from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom'


function ItemListContainer (props) {
    const [products,setProducts] = useState([])
    const {id,category} = useParams()

    async function getProducts(){
        const response = await getData()
        console.log(response)
        
        //match the id with the id in the url
        if (!id & !category){ 
            setProducts(response)
        }


        if (id){
            const filteredProducts = response.filter((item)=> item.id === Number(id))
            console.log(filteredProducts)
            setProducts(filteredProducts)
        }
        
        if (category){
            const filteredProducts = response.filter((item)=> item.category == category)
            console.log(filteredProducts)
            setProducts(filteredProducts)
        }


    }

    useEffect(()=>{
        getProducts()
    },[id,category])

    



    return (
        <div className='container'>
            <h1 className='title'>Listado de Productos</h1>
            <div className="flex-container">
                {products.map((item) => (
                    <ItemDetails  key={item.id} {...item}/>
                ))}
            </div>
        </div>
    
    );
}

export default ItemListContainer;