// import './cartContainer.css'
import { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../context/context.cart'
import { Link } from 'react-router-dom'

function CartContainer (props) {
    const {cart,removeItem,clearCart} = useContext(cartContext)
    const item=props.item
    return (
        <>
        <div className='CartContainer'>
            <div className='Cart'>
                <div className='CartItem'>
                    <img width={100} src={item.img} alt="imagen" />
                    <h1>{item.title}</h1>
                    <h2>S/.{item.price} </h2>
                    <p>Cantidad: {item.count}</p>
                    <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default CartContainer;