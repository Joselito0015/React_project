//item list container component for the item list 
import './ItemDetails.css'
import ItemCount from '../ItemCount/itemCount'
import { cartContext } from '../../context/context.cart'
import { useState, useEffect, useContext } from 'react'


function ItemDetails (props) {
    const {cart,addToCart} = useContext(cartContext)
    const [products,setProducts] = useState(props)
    const {id, title, img, price, description,stock } = props;

    function handleCount(count){
        addToCart(products,count)
        console.log(cart)
    }
    
    return (
        <>
        <div className='Card'>
            <img width={500} src={img} alt="imagen" />
            <h1>{title}</h1>
            <h2>S/.{price} </h2>
            <p>{description}</p>

            <ItemCount handleCount={handleCount} stock={stock}/>            
            
        </div>
        </>
    );
}

export default ItemDetails;